import * as Bootstrap from 'ojs/ojbootstrap';
import { IntlConverterUtils } from 'ojs/ojconverterutils-i18n';
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import 'oj-c/text-area';
import 'oj-c/input-date-mask';
import 'oj-c/input-date-text';
import 'oj-c/input-month-mask';
import 'oj-c/input-number';
import 'oj-c/input-text';
import 'oj-c/input-password';
import 'oj-c/input-sensitive-text';
import 'oj-c/radioset';
import 'oj-c/select-multiple';
import 'oj-c/select-single';
import 'oj-c/form-layout';
import 'oj-c/checkboxset';
import 'oj-c/checkbox';
import 'oj-c/collapsible';
import Message = require('ojs/ojmessaging');
import { whenDocumentReady } from "ojs/ojbootstrap";
import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');
import "ojs/ojtable";
import 'ojs/ojknockout';
import 'oj-c/message-toast';
import 'oj-c/button';
import * as ko from "knockout";
import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-number';
import 'oj-c/input-password';
import "ojs/ojdatetimepicker";
import "ojs/ojlabel";
import "ojs/ojcore";
import { ojButton } from "ojs/ojbutton";
import "ojs/ojbutton";
import "ojs/ojknockout";
import "oj-c/progress-bar";
import "ojs/ojbutton";
import 'oj-c/avatar';
import 'oj-c/list-item-layout';
import 'oj-c/list-view';
import 'ojs/ojknockout';
import 'oj-c/message-toast';

import * as AccUtils from "../accUtils";

class IncidentsViewModel {
  email: ko.Observable<string>;
  password: ko.Observable<any>;
  fname: ko.Observable<string>;
  lname: ko.Observable<any>;
  dob: ko.Observable<any>;
  readonly messages: MutableArrayDataProvider<any, { id: string }>;


  constructor() {
    this.email = ko.observable("");
    this.password = ko.observable("");
    this.fname = ko.observable("");
    this.lname = ko.observable("");
    // Initialize with current date or a default date if preferred
    this.dob = ko.observable(IntlConverterUtils.dateToLocalIsoDateString(new Date()));
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
    try {
      const emailValue = this.email();
      const passwordValue = this.password();
      const fname = this.fname();
      const lname = this.lname();
      const dob = this.dob();

      const payload = {
        "first_name": fname,
        "last_name": lname,
        "dob": dob,
        "email": emailValue,
        "password": passwordValue,
        "verified": false,
        "locked": false,
        "attempts": 0
      };

      const response = await fetch("http://localhost:8080/customerapi/singup", {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      sessionStorage.setItem("id", data);
      this.addMessage('info', 'Success', 'Registration successful!');
      window.location.href = 'http://localhost:8000/?ojr=customers';
    } catch (error) {
      console.error('Error:', error);
      this.addMessage('error', 'Error', 'Registration failed. Please try again.')
    }
  }

  public closeMessage = (event: CustomEvent) => {
    let data = this.messages.data.slice();
    const closeMessageKey = event.detail.key;

    data = data.filter((message) => (message as any).id !== closeMessageKey);
    this.messages.data = data;
  };
}

whenDocumentReady().then(() => {
  ko.applyBindings(new IncidentsViewModel(), document.getElementById('containerDiv'));
});

export = IncidentsViewModel;
