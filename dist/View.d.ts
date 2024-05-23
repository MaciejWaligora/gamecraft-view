import * as PIXI from "pixijs";
import { Signal } from "gamecraft-utils";
export interface ViewConfig {
    renderer: PIXI.Application;
    scale?: number;
}
export declare abstract class View<Tconfig extends ViewConfig> extends PIXI.Container {
    protected _renderer: PIXI.Application;
    showSignal: Signal<unknown>;
    hideSignal: Signal<unknown>;
    clickedSignal: Signal<unknown>;
    constructor(config: Tconfig);
    add(): void;
    remove(): void;
    show(): void;
    hide(): void;
    click(): void;
    protected _center(): void;
    abstract update(): void;
}
