webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Movies\">\n    <app-movies></app-movies>\n  </mat-tab>\n  <mat-tab label=\"Songs\">\n    <app-songs></app-songs>\n  </mat-tab>\n  <mat-tab label=\"Movie Categories\">\n    <app-movie-categories></app-movie-categories>\n  </mat-tab>\n  <mat-tab label=\"Song Categories\">\n    <app-song-categories></app-song-categories>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CHS Admin';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movies_movies_component__ = __webpack_require__("./src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movie_categories_movie_categories_component__ = __webpack_require__("./src/app/movie-categories/movie-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__songs_songs_component__ = __webpack_require__("./src/app/songs/songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__song_categories_song_categories_component__ = __webpack_require__("./src/app/song-categories/song-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__movies_movies_component__["b" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__movie_categories_movie_categories_component__["a" /* MovieCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__songs_songs_component__["a" /* SongsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__song_categories_song_categories_component__["a" /* SongCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__movies_movies_component__["a" /* MovieEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__movies_movies_component__["a" /* MovieEditorComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_accordion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_observers__ = __webpack_require__("./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["H" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["E" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["I" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_accordion__["c" /* CdkAccordionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["e" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_portal__["g" /* PortalModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/movie-categories/mock-categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
/* tslint:disable */
var CATEGORIES = [{
        "id": "11233123123",
        "name": "Educational",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "http://via.placeholder.com/295x144",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "https://image.ibb.co/fHELmc/kids_01.jpg"
        },
        "sequence": 1
    }, {
        "id": "23423453245",
        "name": "Veriown Videos",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/kLhUex/veriown_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 2
    }, {
        "id": "1233123123",
        "name": "Spoken English",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 3
    }, {
        "id": "546464564",
        "name": "Regional Movies",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/mTOrsH/series_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 4
    }, {
        "id": "23423423423",
        "name": "Bollywood Movies",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/iamSGc/tiger.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 5
    }, {
        "id": "23423423423",
        "name": "Hollywood Movies",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 6
    }];


/***/ }),

/***/ "./src/app/movie-categories/movie-categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movie-categories/movie-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"movieCategories\">\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef>ID</mat-header-cell>\n    <mat-cell *matCellDef=\"let category\"> {{category.id}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let category\"> {{category.name}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n    <mat-cell *matCellDef=\"let category\"><mat-icon>mode_edit</mat-icon></mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/movie-categories/movie-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_categories__ = __webpack_require__("./src/app/movie-categories/mock-categories.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieCategoriesComponent = /** @class */ (function () {
    function MovieCategoriesComponent() {
        this.displayedColumns = ['id', 'name', 'actions'];
        this.movieCategories = __WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* CATEGORIES */];
    }
    MovieCategoriesComponent.prototype.ngOnInit = function () {
    };
    MovieCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-movie-categories',
            template: __webpack_require__("./src/app/movie-categories/movie-categories.component.html"),
            styles: [__webpack_require__("./src/app/movie-categories/movie-categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieCategoriesComponent);
    return MovieCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/movies/mock-movies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOVIES; });
/* tslint:disable */
var MOVIES = [{
        "id": "1231238823133",
        "title": "Tiger Zinda Hai",
        "categories": ["23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/iamSGc/tiger.jpg",
            "640x333": "https://preview.ibb.co/k4STNH/tiger.jpg",
            "341x307": "https://image.ibb.co/m5Qtpx/tiger_details.jpg"
        },
        "synopsis": "Inspired by real events, Tiger Zinda Hai is a sequel to the blockbuster Ek Tha Tiger, and an espionage action drama that follows a daring rescue mission in Iraq. When a group of Indian and Pakistani nurses are held hostage in Iraq by the militant Abu Usman, Indian intelligence (RAW) tracks down the reclusive agent Tiger 8 years after he fled with former Pakistani intelligence (ISI) agent Zoya. Joining forces in the name of humanity, Tiger and Zoya lead a team of RAW and ISI agents to covertly enter the hospital where the nurses are trapped, and get the nurses to safety before an American airstrike blows up the hospital. Tiger Zinda Hai is an all out entertainer with gritty action, music and drama.",
        "abridged_cast": [{
                "name": "Salman Khan",
                "id": "162654049",
                "characters": ["Tiger"]
            }, {
                "name": "Katrina Kaif",
                "id": "162669130",
                "characters": ["Zoya"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "127723123133",
        "title": "Fukrey Returns",
        "categories": ["23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/fzu8NH/fukrey_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "After sending Bholi Punjaban in jail Fukrey Boys Hunny,Choocha,Zafar and Lali are doing well their success in life still depends on Choocha's dreams.A frustrated Bholi is in jail since a year and cant arrange for her bail as her criminal activities have stopped and there is no source of income.Bholi contacts minister Babulal Bhatia to bail her out in returns Babulal tells her that she should pay him 10 Crore within 10 days of her release or else on 11th day she will be back in jail.Bholi tracks Hunny,Choocha,Zafar and Lali and tells them as they were responsible for her arrest they should arrange the bail amount by opening a fraud finance company which will benefit them as well as the people.But Babulal plays a part and puts the company into losses.Fukrey Boys now are on the run to save their lives from Bholi as well as the people who have invested in the company.",
        "abridged_cast": [{
                "name": "Pulkit Samrat",
                "id": "162654049",
                "characters": ["Hunny"]
            }, {
                "name": "Priya Anand",
                "id": "162669130",
                "characters": ["Priya"]
            }, {
                "name": "Manjot Singh",
                "id": "162669130",
                "characters": ["Lali"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "123123553133",
        "title": "Padman",
        "categories": ["23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/cPjxGc/padman_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "Biography on Tamil Nadu activist Arunachalam Muruganantham, whose mission was to provide sanitary napkin's to poor women of rural areas. Who would use rag cloths or leaves during periods where use of sanitary napkins was rare. After he did not get fruitful results from his family and a medical college he approached, he decided to try it himself by making a uterus out of football bladder and filling goat's blood in it. He would roam around the whole day with the bladder, the aim was to check the absorption rate of the sanitary napkins made by him.",
        "abridged_cast": [{
                "name": "Akshay Kumar",
                "id": "162654049",
                "characters": ["Lakshmikant Chauhan"]
            }, {
                "name": "Radhika Apte",
                "id": "162669130",
                "characters": ["Gayatri"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "123122223133",
        "title": "Raid",
        "categories": ["23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/kkA4wc/raid_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "Set in the 80s in Uttar Pradesh, India, Raid is based on the true story of one of the most high profile raids the country has ever known. Amay Patnaik (Ajay Devgn), an upright and no-nonsense Income Tax officer has already been transferred 49 times in the past seven years owing to his idealistic and courageous disposition to uncover tax frauds, hitting hard the pockets of many a big shot. When Patnaik is assigned the case of Tauji, a highly influential and feared man in Uttar Pradesh, little does he know that his unerring determination to bring Tauji to justice would culminate in the longest and most challenging raid of his career as also the history of the Income Tax Department of India. Would Amay succeed in the face of an increasingly stubborn and belligerent Tauji forms the crux of the story.",
        "abridged_cast": [{
                "name": "Akshay Kumar",
                "id": "162654049",
                "characters": ["Amay Patnaik"]
            }, {
                "name": "Radhika Apte",
                "id": "162669130",
                "characters": ["Gayatri"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "123223123133",
        "title": "Sonu Ke Titu Ki Sweety",
        "categories": ["23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/jOnTNH/sonu_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "We have always been told that \"Marriage\" is a marriage between two families. 'Sonu ke Titu ki Sweety' explores the new age version of the same belief where \"Marriage\" is a marriage between two friend circles. What happens when you decide to get married, but your best friend and your girlfriend can't see eye to eye. Sonu and Titu are childhood friends. Titu has always been a naïve lover, who falls in love easily and Sonu has always had to step in to save him. But Sweety is the perfect bride and Titu is head over heels in love with her. Sonu's instinct to protect Titu at whatever cost, makes him feel that she's too good to be true. What ensues is a war between the best friend and the bride to be. While Sweety is trying to impress Titu and the family alike, Sonu is out to sabotage the utopian romance.",
        "abridged_cast": [{
                "name": "Kartik Aaryan",
                "id": "162654049",
                "characters": ["Sonu"]
            }, {
                "name": "Radhika Apte",
                "id": "162669130",
                "characters": ["Gayatri"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "133222123133",
        "title": "Student of the Year 2",
        "categories": ["23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/j1BBbc/student_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "Plot unknown. Follow up to the 2012 romantic comedy 'Student of the Year'.",
        "abridged_cast": [{
                "name": "Tiger Shroff",
                "id": "162654049",
                "characters": ["Lead Actor"]
            }, {
                "name": "Radhika Apte",
                "id": "162669130",
                "characters": ["Gayatri"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "123123123123",
        "title": "Big Buck Bunny",
        "categories": ["11233123123"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "http://via.placeholder.com/295x144",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "A recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.\n\n The green and sparkling spring has finally arrived in the thick and undisturbed forest, and all creatures, great and small, enjoy life. But somewhere on the other side of the woods, a recently awoken enormous and utterly adorable fluffy rabbit named Big Buck Bunny is heartlessly harassed by a flying squirrel's gang of rodents who simply find great pleasure in bullying innocent animals. Without a doubt, those mischievous pests are determined to squash Big Buck's happiness, furthermore, when two lustrous butterflies get in the gang's way with grave consequences, this will mean war. But who's gonna win?",
        "abridged_cast": [{
                "name": "Keanu Reeves",
                "id": "162654049",
                "characters": ["Bunny"]
            }, {
                "name": "Carrie-Anne Moss",
                "id": "162669130",
                "characters": ["Squirrel 1"]
            }, {
                "name": "Laurence Fishburne",
                "id": "162669090",
                "characters": ["Squirrel 2"]
            }, {
                "name": "Hugo Weaving",
                "id": "162709905",
                "characters": ["Squirrel 3"]
            }, {
                "name": "Jada Pinkett Smith",
                "id": "162673877",
                "characters": ["Squirrel 4"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "123123123124",
        "title": "Big Buck Bunny 2",
        "categories": ["11233123123", "546464564", "1233123103", "23423423423"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "http://via.placeholder.com/295x144",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "A recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.\n\nA recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.",
        "abridged_cast": [{
                "name": "Reeves Keanu",
                "id": "162654049",
                "characters": ["The Big Bunny"]
            }, {
                "name": "Moss Carrie-Anne",
                "id": "162669130",
                "characters": ["The Squirrel 1"]
            }, {
                "name": "Fishburne Laurence",
                "id": "162669090",
                "characters": ["The Squirrel 2"]
            }, {
                "name": "Weaving Hugo",
                "id": "162709905",
                "characters": ["The Squirrel 3"]
            }, {
                "name": "Smith Jada Pinkett",
                "id": "162673877",
                "characters": ["The Squirrel 4"]
            }],
        "links": {
            "download": "https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        }
    }, {
        "id": "345534535",
        "title": "Instructional",
        "categories": ["23423453245"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/kLhUex/veriown_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "Introduction to Veriown CHS Panel",
        "local_resource_id": "p1_instructional_en",
        "abridged_cast": [],
        "links": {}
    }, {
        "id": "345534536",
        "title": "निर्देशात्मक",
        "categories": ["23423453245"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/kLhUex/veriown_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "वेरिओन सीएचएस पैनल का परिचय",
        "local_resource_id": "p1_instructional_hi",
        "abridged_cast": [],
        "links": {}
    }, {
        "id": "345534537",
        "title": "Promotional (Short)",
        "categories": ["23423453245"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/kLhUex/veriown_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "Introduction to Veriown CHS Panel",
        "local_resource_id": "p1_promo_short",
        "abridged_cast": [],
        "links": {}
    }, {
        "id": "345534538",
        "title": "Promotional (Long)",
        "categories": ["23423453245"],
        "thumbnails": {
            "400x207": "http://via.placeholder.com/400x207",
            "293x293": "http://via.placeholder.com/293x293",
            "295x144": "https://image.ibb.co/kLhUex/veriown_01.jpg",
            "640x333": "http://via.placeholder.com/640x333",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "synopsis": "Introduction to Veriown CHS Panel",
        "local_resource_id": "p1_promo_long",
        "abridged_cast": [],
        "links": {}
    }];


/***/ }),

/***/ "./src/app/movies/movie-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/movies/movie-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(movie)\" #movieForm=\"ngForm\">\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"title\" placeholder=\"Title\" [(ngModel)]=\"movie.title\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <textarea matInput name=\"synopsis\" placeholder=\"Synopsis\" [(ngModel)]=\"movie.synopsis\"></textarea>\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Categories\" [(ngModel)]=\"movie.categories\" name=\"categories\" multiple=\"true\">\n      <mat-option\n        *ngFor=\"let category of categories\"\n        [value]=\"category.id\">\n        {{ category.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br/>\n  <label>Abridged Cast</label>\n  <mat-list>\n    <mat-list-item *ngFor=\"let member of movie.abridged_cast\">\n      <mat-form-field>\n        <input matInput placeholder=\"Artist Name\" [(ngModel)]=\"member.name\" [ngModelOptions]=\"{standalone: true}\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <button (click)=\"addCast()\" mat-mini-fab color=\"primary\"><mat-icon>add</mat-icon></button>\n    </mat-list-item>\n  </mat-list>\n\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"thumbnail400x207\" placeholder=\"Thumbnail 400x207\" [(ngModel)]=\"movie.thumbnails['400x207']\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"thumbnail293x293\" placeholder=\"Thumbnail 293x293\" [(ngModel)]=\"movie.thumbnails['293x293']\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"thumbnail295x144\" placeholder=\"Thumbnail 295x144\" [(ngModel)]=\"movie.thumbnails['295x144']\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"thumbnail640x333\" placeholder=\"Thumbnail 640x333\" [(ngModel)]=\"movie.thumbnails['640x333']\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"thumbnail341x307\" placeholder=\"Thumbnail 341x307\" [(ngModel)]=\"movie.thumbnails['341x307']\">\n  </mat-form-field>\n  <br/>\n  <mat-form-field class=\"full-width\">\n    <input matInput name=\"download\" placeholder=\"Download URL\" [(ngModel)]=\"movie.links.download\">\n  </mat-form-field>\n  <br/>\n  <button type=\"submit\" mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Save</button>\n</form>"

/***/ }),

/***/ "./src/app/movies/movies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"pull-right\" mat-fab (click)=\"onNew()\"><mat-icon>add</mat-icon></button>\n<mat-table [dataSource]=\"movies\">\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef>ID</mat-header-cell>\n    <mat-cell *matCellDef=\"let movie\"> {{movie.id}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\n    <mat-cell *matCellDef=\"let movie\"> {{movie.title}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n    <mat-cell *matCellDef=\"let movie\"><mat-icon (click)=\"onEdit(movie)\">mode_edit</mat-icon></mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MoviesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_movies__ = __webpack_require__("./src/app/movies/mock-movies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_categories_mock_categories__ = __webpack_require__("./src/app/movie-categories/mock-categories.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(dialog) {
        this.dialog = dialog;
        this.movies = __WEBPACK_IMPORTED_MODULE_1__mock_movies__["a" /* MOVIES */];
        this.displayedColumns = ['id', 'title', 'actions'];
    }
    MoviesComponent.prototype.openEditor = function (movie) {
        this.dialog.open(MovieEditorComponent, {
            data: movie,
            height: '400px',
            width: '600px',
        });
    };
    MoviesComponent.prototype.onNew = function () {
        var movie = {
            'id': '',
            'title': '',
            'categories': [],
            'thumbnails': {
                '400x207': '',
                '293x293': '',
                '295x144': '',
                '640x333': '',
                '341x307': ''
            },
            'synopsis': '',
            'abridged_cast': [{
                    'name': ''
                }],
            'links': {
                'download': ''
            }
        };
        this.openEditor(movie);
    };
    MoviesComponent.prototype.onEdit = function (movie) {
        this.openEditor(movie);
    };
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-movies',
            template: __webpack_require__("./src/app/movies/movies.component.html"),
            styles: [__webpack_require__("./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], MoviesComponent);
    return MoviesComponent;
}());

var MovieEditorComponent = /** @class */ (function () {
    function MovieEditorComponent(movie) {
        this.movie = movie;
        this.categories = __WEBPACK_IMPORTED_MODULE_3__movie_categories_mock_categories__["a" /* CATEGORIES */];
    }
    MovieEditorComponent.prototype.onSubmit = function (movie) {
    };
    MovieEditorComponent.prototype.addCast = function () {
        this.movie.abridged_cast.push({ name: '' });
    };
    MovieEditorComponent.prototype.ngOnInit = function () {
    };
    MovieEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-movie-editor',
            template: __webpack_require__("./src/app/movies/movie-editor.component.html"),
            styles: [__webpack_require__("./src/app/movies/movie-editor.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], MovieEditorComponent);
    return MovieEditorComponent;
}());



/***/ }),

/***/ "./src/app/song-categories/mock-categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
/* tslint:disable */
var CATEGORIES = [{
        "id": "music-11233123123",
        "name": "Top 15 of 2018",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "http://via.placeholder.com/295x144",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "https://image.ibb.co/fHELmc/kids_01.jpg"
        },
        "sequence": 1
    }, {
        "id": "music-23423453245",
        "name": "Best of 90's",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/kLhUex/veriown_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 3
    }, {
        "id": "music-1233123123",
        "name": "Punjabi",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 5
    }, {
        "id": "music-546464564",
        "name": "Telugu",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/mTOrsH/series_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 7
    }, {
        "id": "music-23423423423",
        "name": "Wedding Songs",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/iamSGc/tiger.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 9
    }, {
        "id": "music-23423423423",
        "name": "Devotional",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 11
    }, {
        "id": "music-23423423424",
        "name": "Bollywood Blockbuster",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 2
    }, {
        "id": "music-23423423425",
        "name": "Romantic Songs",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 4
    }, {
        "id": "music-23423423426",
        "name": "Hindi",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 6
    }, {
        "id": "music-23423423427",
        "name": "Dance Hits",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 8
    }, {
        "id": "music-23423423428",
        "name": "Folk",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 10
    }, {
        "id": "music-23423423429",
        "name": "Party",
        "thumbnails": {
            "270x140": "http://via.placeholder.com/270x140",
            "295x144": "https://image.ibb.co/m4gNzx/english_01.jpg",
            "300x300": "http://via.placeholder.com/300x300",
            "341x307": "http://via.placeholder.com/341x307"
        },
        "sequence": 12
    }];


/***/ }),

/***/ "./src/app/song-categories/song-categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/song-categories/song-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"songCategories\">\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef>ID</mat-header-cell>\n    <mat-cell *matCellDef=\"let category\"> {{category.id}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let category\"> {{category.name}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n    <mat-cell *matCellDef=\"let category\"><mat-icon>mode_edit</mat-icon></mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/song-categories/song-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_categories__ = __webpack_require__("./src/app/song-categories/mock-categories.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongCategoriesComponent = /** @class */ (function () {
    function SongCategoriesComponent() {
        this.displayedColumns = ['id', 'name', 'actions'];
        this.songCategories = __WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* CATEGORIES */];
    }
    SongCategoriesComponent.prototype.ngOnInit = function () {
    };
    SongCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-song-categories',
            template: __webpack_require__("./src/app/song-categories/song-categories.component.html"),
            styles: [__webpack_require__("./src/app/song-categories/song-categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SongCategoriesComponent);
    return SongCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/songs/mock-songs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SONGS; });
/* tslint:disable */
var SONGS = [{
        "id": "song-1",
        "title": "Für_Elise",
        "album": "Mozart - Single",
        "duration": 211,
        "categories": ["music-23423423428"],
        "thumbnails": {
            "54x54": "http://via.placeholder.com/54x54",
            "40x40": "http://via.placeholder.com/40x40",
        },
        "links": {
            "download": "http://www.amclassical.com/mp3/amclassical_beethoven_fur_elise.mp3"
        }
    }, {
        "id": "song-2",
        "title": "Beethoven: Moonlight Sonata, movement 1",
        "album": "Classics",
        "duration": 393,
        "categories": ["music-23423423428"],
        "thumbnails": {
            "54x54": "http://via.placeholder.com/54x54",
            "40x40": "http://via.placeholder.com/40x40",
        },
        "links": {
            "download": "http://www.amclassical.com/mp3/amclassical_moonlight_sonata_movement_1.mp3"
        }
    }, {
        "id": "song-3",
        "title": "Some random song",
        "album": "Some Album",
        "duration": 393,
        "categories": ["music-11233123123", "music-23423453245"],
        "thumbnails": {
            "54x54": "http://via.placeholder.com/54x54",
            "40x40": "http://via.placeholder.com/40x40",
        },
        "links": {
            "download": "http://www.amclassical.com/mp3/amclassical_moonlight_sonata_movement_1.mp3"
        }
    }];


/***/ }),

/***/ "./src/app/songs/songs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/songs/songs.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"songs\">\n  <ng-container matColumnDef=\"id\">\n    <mat-header-cell *matHeaderCellDef>ID</mat-header-cell>\n    <mat-cell *matCellDef=\"let song\"> {{song.id}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\n    <mat-cell *matCellDef=\"let song\"> {{song.title}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n    <mat-cell *matCellDef=\"let song\"><mat-icon>mode_edit</mat-icon></mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/songs/songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_songs__ = __webpack_require__("./src/app/songs/mock-songs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongsComponent = /** @class */ (function () {
    function SongsComponent() {
        this.songs = __WEBPACK_IMPORTED_MODULE_1__mock_songs__["a" /* SONGS */];
        this.displayedColumns = ['id', 'title', 'actions'];
    }
    SongsComponent.prototype.ngOnInit = function () {
    };
    SongsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-songs',
            template: __webpack_require__("./src/app/songs/songs.component.html"),
            styles: [__webpack_require__("./src/app/songs/songs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SongsComponent);
    return SongsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map