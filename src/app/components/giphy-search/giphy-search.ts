import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { finalize, startWith, map, debounceTime, distinctUntilChanged, switchMap, catchError, of } from 'rxjs';
import { GiphyGif } from '../../models/giphy.model';
import { GiphyService } from '../../services/giphy';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-giphy-search',
    imports: [
        ReactiveFormsModule, 
        MatProgressSpinnerModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatButtonModule, 
        MatIconModule, 
        MatCardModule,
        MatTooltipModule
    ],
    templateUrl: './giphy-search.html',
    styleUrl: './giphy-search.scss',
})
export class GiphySearch implements OnInit{
    private readonly giphyService = inject(GiphyService);
    private readonly destroyRef = inject(DestroyRef);
    readonly searchControl = new FormControl('', {
        nonNullable: true,
    });
    readonly query = signal('');
    readonly gifs = signal<GiphyGif[]>([]);
    readonly loading = signal(false);
    readonly error = signal<string | null>(null);

    ngOnInit(): void {
        this.loadTrending();
    }

    loadTrending(): void {
        this.searchControl.valueChanges
        .pipe(
            startWith(this.searchControl.value),
            map(query => query.trim()),
            debounceTime(1000),
            distinctUntilChanged(),

            switchMap(query => {
                this.loading.set(true);
                this.error.set(null);

                const request$ = query
                    ? this.giphyService.search(query)
                    : this.giphyService.getTrending();

                return request$.pipe(
                    map(response => response.data),
                    catchError(() => {
                        this.error.set('Неможливо завантажити GIF');
                        return of([] as GiphyGif[]);
                    }),
                    finalize(() => this.loading.set(false)),
                );
            }),
            takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(gifs => {
            this.gifs.set(gifs);
        });
    };

    async downloadGif(gif: GiphyGif): Promise<void> {
        const url = gif.images.original.url;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Download failed');
            }

            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = objectUrl;
            link.download = `${gif.id}.gif`;
            link.click();

            URL.revokeObjectURL(objectUrl);
        } catch (error) {
            console.error('Неможливо завантажити GIF:', error);
        }
    }
}
