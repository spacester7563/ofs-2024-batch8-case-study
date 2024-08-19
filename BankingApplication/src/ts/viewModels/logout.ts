import * as ko from "knockout";
import { whenDocumentReady } from "ojs/ojbootstrap";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojtable";
import "ojs/ojknockout";

class LogoutViewModel {

    constructor() {
        sessionStorage.clear();
        window.location.href = 'http://localhost:8000/?ojr=dashboard';
    }
}


export = LogoutViewModel;
