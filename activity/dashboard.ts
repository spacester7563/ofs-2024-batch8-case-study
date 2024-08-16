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

type RadiosetArrayDataItem = {
  value: string;
  label: string;
};


const genderItems: RadiosetArrayDataItem[] = [
  { value: 'male', label: 'male' },
  { value: 'female', label: 'female' },
];

class DashboardViewModel {

  button2Text: string;
  activatedButton: ko.Observable<string>;
  date: ko.Observable<string>;
  email: ko.Observable<string>;
  password: ko.Observable<any>;
  salary: ko.Observable<number>;
  gender: ko.Observable<any>;
  genderOptions: ko.ObservableArray<RadiosetArrayDataItem>;
  private readonly step = ko.observable(0);
  readonly progressValue = ko.pureComputed(() => {
    return Math.min(this.step(), 100);
  });

  readonly messages: MutableArrayDataProvider<string, Record<string, any>>;

  readonly closeMessage = (event: CustomEvent) => {
    let data = this.messages.data.slice();
    const closeMessageKey = event.detail.key;

    data = data.filter((message) => (message as any).id !== closeMessageKey);
    this.messages.data = data;
  };

  private readonly data = [
    {
      id: 1,
      name: 'Chris Black',
      title: 'Oracle Cloud Infrastructure GTM Channel Director EMEA',
      image: 'https://media.licdn.com/dms/image/D4D03AQFlYEcNzF0VTg/profile-displayphoto-shrink_200_200/0/1713367359318?e=2147483647&v=beta&t=CAgKg-9D-TqBSEJlxYidPwIZd5BysyaXx03btLzoQw0'
    },
    {
      id: 2,
      name: 'Christine Cooper',
      title: 'Senior Principal Escalation Manager',
      image: 'https://media.licdn.com/dms/image/D4D03AQFlYEcNzF0VTg/profile-displayphoto-shrink_200_200/0/1713367359318?e=2147483647&v=beta&t=CAgKg-9D-TqBSEJlxYidPwIZd5BysyaXx03btLzoQw0'
    },
    {
      id: 3,
      name: 'Chris Benalamore',
      title: 'Area Business Operations Director EMEA & JAPAC',
      image: 'https://media.licdn.com/dms/image/D4D03AQFlYEcNzF0VTg/profile-displayphoto-shrink_200_200/0/1713367359318?e=2147483647&v=beta&t=CAgKg-9D-TqBSEJlxYidPwIZd5BysyaXx03btLzoQw0'
    }
  ];

  readonly dataProvider = new ArrayDataProvider(this.data, {
    keyAttributes: 'value'
  });

  private readonly deptArray = JSON.parse(`[
    {
      "DepartmentId": 10,
      "DepartmentName": "Finance 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2014-06-13",
      "EmployeeCount": 335,
      "Type": "Sales",
      "Currency": "EUR",
      "Primary": [],
      "Rating": 3,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 20,
      "DepartmentName": "Control And Credit 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2019-09-10",
      "EmployeeCount": 206,
      "Type": "HR",
      "Currency": "USD",
      "Primary": [],
      "Rating": 1,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 30,
      "DepartmentName": "Purchasing 28",
      "LocationId": 400,
      "ManagerId": 6001,
      "StartDate": "2021-01-03",
      "EmployeeCount": 473,
      "Type": "HR",
      "Currency": "JPY",
      "Primary": ["checked"],
      "Rating": 3,
      "TargetComplete": 50
    },
    {
      "DepartmentId": 40,
      "DepartmentName": "Purchasing 27",
      "LocationId": 400,
      "ManagerId": 1001,
      "StartDate": "2016-02-01",
      "EmployeeCount": 369,
      "Type": "Finance",
      "Currency": "JPY",
      "Primary": [],
      "Rating": 5,
      "TargetComplete": 80
    },
    {
      "DepartmentId": 50,
      "DepartmentName": "Shipping 4",
      "LocationId": 300,
      "ManagerId": 2001,
      "StartDate": "2014-07-31",
      "EmployeeCount": 476,
      "Type": "HR",
      "Currency": "EUR",
      "Primary": [],
      "Rating": 2,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 60,
      "DepartmentName": "Finance 10",
      "LocationId": 400,
      "ManagerId": 5001,
      "StartDate": "2017-01-17",
      "EmployeeCount": 304,
      "Type": "Sales",
      "Currency": "JPY",
      "Primary": ["checked"],
      "Rating": 3,
      "TargetComplete": 80
    },
    {
      "DepartmentId": 70,
      "DepartmentName": "Operations 9",
      "LocationId": 400,
      "ManagerId": 6001,
      "StartDate": "2015-05-24",
      "EmployeeCount": 334,
      "Type": "Sales",
      "Currency": "EUR",
      "Primary": [],
      "Rating": 2,
      "TargetComplete": 60
    },
    {
      "DepartmentId": 80,
      "DepartmentName": "Sales and Marketing 18",
      "LocationId": 500,
      "ManagerId": 4001,
      "StartDate": "2017-03-25",
      "EmployeeCount": 211,
      "Type": "Finance",
      "Currency": "JPY",
      "Primary": [],
      "Rating": 1,
      "TargetComplete": 70
    },
    {
      "DepartmentId": 90,
      "DepartmentName": "Inventory 6",
      "LocationId": 400,
      "ManagerId": 5001,
      "StartDate": "2017-12-18",
      "EmployeeCount": 429,
      "Type": "Finance",
      "Currency": "EUR",
      "Primary": ["checked"],
      "Rating": 1,
      "TargetComplete": 70
    }
  ]`);
  readonly dataprovider = new ArrayDataProvider(this.deptArray, {
    keyAttributes: "DepartmentId",
    implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
  });

  constructor() {
    this.email = ko.observable("");
    this.password = ko.observable("");
    this.salary = ko.observable(0);
    this.gender = ko.observable();
    this.genderOptions = ko.observableArray(genderItems);
    this.date = ko.observable(
      IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1))
    );
    this.button2Text = "Button Text 2";
    this.activatedButton = ko.observable("(None activated yet)");
    window.setInterval(() => {
      this.step((this.step() + 1) % 200);
    }, 30);
    const initialData = [
      {
        id: 'error1',
        severity: 'error',
        summary: 'Error message summary',
        detail: 'Error message detail.'
      }
    ];
    this.messages = new MutableArrayDataProvider(initialData, {
      keyAttributes: 'id'
    });
  }

  public buttonAction = (event: ojButton.ojAction) => {
    this.activatedButton((event.currentTarget as HTMLElement).id);
    return true;
  };
}
whenDocumentReady().then(() => {
  ko.applyBindings(
    new DashboardViewModel(),
    document.getElementById("progressBarWrapper")
  );
  ko.applyBindings(new DashboardViewModel(), document.getElementById('containerDiv'));
  ko.applyBindings(new DashboardViewModel(), document.getElementById("table"));
  ko.applyBindings(new DashboardViewModel(), document.getElementById('listview'));
});

export = DashboardViewModel;
