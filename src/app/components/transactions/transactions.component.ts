import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { MemberFetchServiceService } from '../../services/member-fetch-service.service';

@Component({
  selector: 'app-transactions',
  imports: [RouterModule, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  constructor(private memberFetch: MemberFetchServiceService) { }
  transactions: any[] = [];


  ngOnInit() {
    this.memberFetch.getTransactions().subscribe((transactions: any) => {
      this.transactions = transactions;
    });
  }
}
