import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-number";
import "ojs/ojknockout";
import "ojs/ojlabel";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";
import "ojs/ojbutton";
import "ojs/ojknockout";
import "oj-c/progress-bar";
import "ojs/ojbutton";
import "ojs/ojformlayout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import Message = require("ojs/ojmessaging");
import "oj-c/radioset";
import 'oj-c/form-layout';
import * as AccUtils from "../accUtils";
import { whenDocumentReady } from "ojs/ojbootstrap";
import 'oj-c/message-toast';
import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');

class TransferViewModel {
    balance: ko.Observable<number>;
    receiver: ko.Observable<number>;
    sender: ko.Observable<number>;
    messages: MutableArrayDataProvider<any, { id: string }>;
    constructor() {
        this.balance = ko.observable(0);
        this.receiver = ko.observable(0);
        this.sender = ko.observable(0);
        this.messages = new MutableArrayDataProvider([], {
            keyAttributes: 'id'
        });

    }
    private generateMessageId() {
        return 'msg_' + new Date().getTime();
    }

    private addMessage(severity: string, summary: string, detail?: string) {
        const id = this.generateMessageId();
        const message = {
            id,
            severity,
            summary,
            detail
        };
        const messagesArray = this.messages.data.slice();
        messagesArray.push(message);
        this.messages.data = messagesArray;
    }
    public buttonAction = async (event: ojButton.ojAction) => {

        let xml = [
            {
                "account_id": this.receiver(),
                "balance": this.balance(),
            },
            {
                "account_id": this.sender(),
                "balance": this.balance(),
            }
        ]

        fetch("http://localhost:8080/customerapi/transfer", {
            method: "PUT",
            body: JSON.stringify(xml),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.text())
            .then(data => {
                this.addMessage('info', 'Success', 'Account Creation Successful!');
            })
            .catch(error => {
                this.addMessage('error', 'Error', 'Account Creation Failed. Please try again.')
            });


    }
    public closeMessage = (event: CustomEvent) => {
        let data = this.messages.data.slice();
        const closeMessageKey = event.detail.key;

        data = data.filter((message) => (message as any).id !== closeMessageKey);
        this.messages.data = data;
    };

}

// Apply bindings when the document is ready
whenDocumentReady().then(() => {
    const viewModel = new TransferViewModel();
    ko.applyBindings(viewModel, document.getElementById('containerDiv'));
});
export = TransferViewModel;
