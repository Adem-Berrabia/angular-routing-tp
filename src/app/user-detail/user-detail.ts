import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css'],
})
export class UserDetailComponent implements OnInit {
  userId: string | null = null;
  user: any = null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Méthode 1 : Snapshot (valeur actuelle)
    this.userId = this.route.snapshot.paramMap.get('id');
    // Méthode 2 : Observable (pour les changements dynamiques)
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      this.loadUserData();
    });
  }
  loadUserData() {
    // Simulation de chargement de données
    this.user = {
      id: this.userId,
      name: `Utilisateur ${this.userId}`,
      email: `user${this.userId}@example.com`,
      role: 'Développeur',
      joinDate: '2024-01-15',
    };
  }
  goBack() {
    window.history.back();
  }
}
