"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const PIXI = __importStar(require("pixijs"));
const gamecraft_utils_1 = require("gamecraft-utils");
class View extends PIXI.Container {
    constructor(config) {
        super();
        this.showSignal = new gamecraft_utils_1.Signal();
        this.hideSignal = new gamecraft_utils_1.Signal();
        this.clickedSignal = new gamecraft_utils_1.Signal();
        this._renderer = config.renderer;
        if (config.scale !== undefined) {
            this.scale.set(config.scale);
        }
        this._renderer.stage.addChild(this);
    }
    add() {
        this._renderer.stage.addChild(this);
        this._center();
        this.alpha = 1;
        this.showSignal.emit();
    }
    remove() {
        this._renderer.stage.removeChild(this);
        this.alpha = 0;
        this.hideSignal.emit();
    }
    show() {
        this.alpha = 1;
        this.showSignal.emit();
    }
    hide() {
        this.alpha = 0;
        this.hideSignal.emit();
    }
    click() {
        this.clickedSignal.emit();
    }
    _center() {
        const screenWidth = this._renderer.screen.width;
        const screenHeight = this._renderer.screen.height;
        this.x = screenWidth / 2;
        this.y = screenHeight / 2;
    }
}
exports.View = View;
