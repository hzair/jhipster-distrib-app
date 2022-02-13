import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'catalog-type-produit',
        data: { pageTitle: 'jhipsterDistributionApp.catalogTypeProduit.home.title' },
        loadChildren: () => import('./catalog-type-produit/catalog-type-produit.module').then(m => m.CatalogTypeProduitModule),
      },
      {
        path: 'catalog-produit',
        data: { pageTitle: 'jhipsterDistributionApp.catalogProduit.home.title' },
        loadChildren: () => import('./catalog-produit/catalog-produit.module').then(m => m.CatalogProduitModule),
      },
      {
        path: 'facture-achat',
        data: { pageTitle: 'jhipsterDistributionApp.factureAchat.home.title' },
        loadChildren: () => import('./facture-achat/facture-achat.module').then(m => m.FactureAchatModule),
      },
      {
        path: 'facture-vente',
        data: { pageTitle: 'jhipsterDistributionApp.factureVente.home.title' },
        loadChildren: () => import('./facture-vente/facture-vente.module').then(m => m.FactureVenteModule),
      },
      {
        path: 'vendeur',
        data: { pageTitle: 'jhipsterDistributionApp.vendeur.home.title' },
        loadChildren: () => import('./vendeur/vendeur.module').then(m => m.VendeurModule),
      },
      {
        path: 'fournisseur',
        data: { pageTitle: 'jhipsterDistributionApp.fournisseur.home.title' },
        loadChildren: () => import('./fournisseur/fournisseur.module').then(m => m.FournisseurModule),
      },
      {
        path: 'client',
        data: { pageTitle: 'jhipsterDistributionApp.client.home.title' },
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
      },
      {
        path: 'camion',
        data: { pageTitle: 'jhipsterDistributionApp.camion.home.title' },
        loadChildren: () => import('./camion/camion.module').then(m => m.CamionModule),
      },
      {
        path: 'lot-camion',
        data: { pageTitle: 'jhipsterDistributionApp.lotCamion.home.title' },
        loadChildren: () => import('./lot-camion/lot-camion.module').then(m => m.LotCamionModule),
      },
      {
        path: 'lot-facture',
        data: { pageTitle: 'jhipsterDistributionApp.lotFacture.home.title' },
        loadChildren: () => import('./lot-facture/lot-facture.module').then(m => m.LotFactureModule),
      },
      {
        path: 'credit',
        data: { pageTitle: 'jhipsterDistributionApp.credit.home.title' },
        loadChildren: () => import('./credit/credit.module').then(m => m.CreditModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
