import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { IVendeur, Vendeur } from '../vendeur.model';
import { VendeurService } from '../service/vendeur.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';

@Component({
  selector: 'jhi-vendeur-update',
  templateUrl: './vendeur-update.component.html',
})
export class VendeurUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    image: [],
    imageContentType: [],
    matricule: [null, [Validators.required]],
    designation: [null, [Validators.required]],
    nom: [],
    prenom: [],
    email: [],
    adresse: [],
    phoneNumber: [],
    salaire: [],
  });

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    protected vendeurService: VendeurService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ vendeur }) => {
      this.updateForm(vendeur);
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(
          new EventWithContent<AlertError>('jhipsterDistributionApp.error', { ...err, key: 'error.file.' + err.key })
        ),
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const vendeur = this.createFromForm();
    if (vendeur.id !== undefined) {
      this.subscribeToSaveResponse(this.vendeurService.update(vendeur));
    } else {
      this.subscribeToSaveResponse(this.vendeurService.create(vendeur));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVendeur>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(vendeur: IVendeur): void {
    this.editForm.patchValue({
      id: vendeur.id,
      image: vendeur.image,
      imageContentType: vendeur.imageContentType,
      matricule: vendeur.matricule,
      designation: vendeur.designation,
      nom: vendeur.nom,
      prenom: vendeur.prenom,
      email: vendeur.email,
      adresse: vendeur.adresse,
      phoneNumber: vendeur.phoneNumber,
      salaire: vendeur.salaire,
    });
  }

  protected createFromForm(): IVendeur {
    return {
      ...new Vendeur(),
      id: this.editForm.get(['id'])!.value,
      imageContentType: this.editForm.get(['imageContentType'])!.value,
      image: this.editForm.get(['image'])!.value,
      matricule: this.editForm.get(['matricule'])!.value,
      designation: this.editForm.get(['designation'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      email: this.editForm.get(['email'])!.value,
      adresse: this.editForm.get(['adresse'])!.value,
      phoneNumber: this.editForm.get(['phoneNumber'])!.value,
      salaire: this.editForm.get(['salaire'])!.value,
    };
  }
}
