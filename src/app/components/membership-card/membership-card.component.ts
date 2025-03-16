import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterModule } from "@angular/router"
import { MemberFetchServiceService } from '../../services/member-fetch-service.service';

@Component({
  selector: 'app-membership-card',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './membership-card.component.html',
  styleUrl: './membership-card.component.css'
})


export class MembershipCardComponent {

  constructor(private memberFetch: MemberFetchServiceService) { }

  memberships: any[] = [];

  userData = {
    first_name: '',
    last_name: '',
    email: '',
    wallet_address: '',
    membership_id: ''
  }

  ngOnInit() {
    this.memberFetch.getMembers().subscribe((memberships: any) => {
      this.memberships = memberships;
    });
  }

  buyMembership(membership: any) {
    Swal.fire({
      title: `Comprar ${membership.name}`,
      html: `
        <input id="swal-first-name" class="swal2-input" placeholder="Nombre">
        <input id="swal-last-name" class="swal2-input" placeholder="Apellido">
        <input id="swal-email" class="swal2-input" placeholder="Correo electrónico" type="email">
        <input id="swal-wallet" class="swal2-input" placeholder="Wallet Address">
      `,
      confirmButtonText: 'Comprar',
      showCancelButton: true,
      preConfirm: () => {
        const firstName = (document.getElementById('swal-first-name') as HTMLInputElement)?.value.trim();
        const lastName = (document.getElementById('swal-last-name') as HTMLInputElement)?.value.trim();
        const email = (document.getElementById('swal-email') as HTMLInputElement)?.value.trim();
        const wallet = (document.getElementById('swal-wallet') as HTMLInputElement)?.value.trim();

        if (!firstName || !lastName || !email || !wallet) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return false;
        }

        // Asignar valores a userData
        this.userData = {
          first_name: firstName,
          last_name: lastName,
          email,
          wallet_address: wallet,
          membership_id: membership._id
        };

        // ✅ Retornar userData para que preConfirm no genere errores
        return this.userData;
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        // Llamar al servicio para comprar la membresía
        this.memberFetch.buyMembership(this.userData).subscribe({
          next: (response) => {
            console.log('Compra realizada:', response);
            Swal.fire('¡Compra exitosa!', 'Tu membresía ha sido adquirida.', 'success');
          },
          error: (err) => {
            console.error('Error en la compra:', err);
            Swal.fire('Error', 'Hubo un problema al realizar la compra.', 'error');
          }
        });
      }
    });
  }


}