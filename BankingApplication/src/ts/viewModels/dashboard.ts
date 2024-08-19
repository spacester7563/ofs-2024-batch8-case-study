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


class DashboardViewModel {

  readonly messages: MutableArrayDataProvider<any, { id: string }>;
  email: ko.Observable<string>;
  password: ko.Observable<any>;
  constructor() {
    this.email = ko.observable("");
    this.password = ko.observable("");
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

      const payload = {
        email: emailValue,
        password: passwordValue
      };

      const response = await fetch("http://localhost:8080/customerapi/login", {
        method: "POST",
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
      this.addMessage('info', 'Success', 'Login successful!');
      sessionStorage.setItem("id", data);
      window.location.href = 'http://localhost:8000/?ojr=customers';

    } catch (error) {
      console.error('Error:', error);
      this.addMessage('error', 'Error', 'Registration failed. Please try again.')
    }

    return true;
  };



  public closeMessage = (event: CustomEvent) => {
    let data = this.messages.data.slice();
    const closeMessageKey = event.detail.key;

    data = data.filter((message) => (message as any).id !== closeMessageKey);
    this.messages.data = data;
  };
}
whenDocumentReady().then(() => {
  ko.applyBindings(new DashboardViewModel(), document.getElementById('containerDiv'));
});
export = DashboardViewModel;
