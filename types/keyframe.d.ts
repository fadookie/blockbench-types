declare class KeyframeDataPoint {
    constructor(keyframe: _Keyframe);
    extend(data: any): void;
    getUndoCopy(): {};
}

interface KeyframeOptions {

}
type axisLetter = 'x' | 'y' | 'z'

declare class _Keyframe {
    constructor(options: KeyframeOptions, uuid: any);

    animator: GeneralAnimator;
    bezier_left_time: ArrayVector3;
    bezier_right_time: ArrayVector3;
    bezier_left_value: ArrayVector3;
    bezier_right_value: ArrayVector3;


    extend(data: KeyframeOptions): this;
    get(axis: axisLetter, data_point?: number): number | string;
    calc(axis: axisLetter, data_point?: number): number;
    set(axis: axisLetter, value: any, data_point?: number): this;
    offset(axis: axisLetter, amount: any, data_point?: number): void;
    flip(axis: axisLetter): this;
    getLerp(other: any, axis: axisLetter, amount: any, allow_expression?: boolean): number;
    getCatmullromLerp(before_plus: _Keyframe, before: _Keyframe, after: _Keyframe, after_plus: _Keyframe, axis: axisLetter, alpha: number): number;
    getArray(data_point?: number): (number | string)[];
    getFixed(data_point?: number, get_quaternion?: boolean): THREE.Vector3 | THREE.Euler | THREE.Quaternion;
    getTimecodeString(): string;
    compileBedrockKeyframe(): object;
    replaceOthers(save: any): void;
    select(event: any): this;
    callPlayhead(): this;
    showContextMenu(event: Event): this;
    remove(): void;
    forSelected(callback: (keyframe: _Keyframe) => void, undo_tag: any): this[];
    getUndoCopy(save: any): {
        animator: any;
        channel?: string | null;
        data_points: object[];
    };
}