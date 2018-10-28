import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertComponent } from '../../components/alert/alert.component';
import { Injectable } from '@angular/core';


@Injectable()

export class AlertClass {
    public modalReference: BsModalRef;
    constructor(private bsModalService: BsModalService) { }
    public openModal(msg): void {
        const initialState = {
            messageList: [msg],
            title: 'Alert'
        };

        this.bsModalService.config.ignoreBackdropClick = true;
        this.modalReference = this.bsModalService.show(AlertComponent, { initialState });
        this.modalReference.content.modalTitle = 'Alert';
        this.modalReference.content.closeBtnName = 'OK';
        (<AlertComponent>this.modalReference.content).onClose.subscribe(result => {
            if (result === true) {
                this.modalReference.hide();
            } else {
                this.modalReference.hide();
            }
        });
    }
    public openStatusModal(result): void {
        if (result.http_status == "204" || result.http_status == "401" || result.http_status == "500") {
            let errMsg = result.data[0].attributes["error_message"];
            this.openModal(errMsg);
        }

    }
}