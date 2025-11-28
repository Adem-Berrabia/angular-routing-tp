import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  category: string = '';
  results: any[] = [];
  isSearching: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    // Lire les query params
    this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = params.get('q') || '';
      this.category = params.get('category') || '';
      if (this.searchTerm) {
        this.performSearch();
      }
    });
  }
  search() {
    // Naviguer avec query params
    this.router.navigate(['/search'], {
      queryParams: {
        q: this.searchTerm,
        category: this.category,
      },
    });
  }
  performSearch() {
    this.isSearching = true;
    // Simulation de résultats de recherche
    setTimeout(() => {
      this.results = [
        { id: 1, title: `Résultat pour "${this.searchTerm}"`, type: this.category || 'général' },
        { id: 2, title: `Article sur ${this.searchTerm}`, type: this.category || 'général' },
        { id: 3, title: `Guide ${this.searchTerm}`, type: this.category || 'général' },
      ];
      this.isSearching = false;
    }, 500);
  }
  clearSearch() {
    this.searchTerm = '';
    this.category = '';
    this.results = [];
    this.router.navigate(['/search']);
  }
}
