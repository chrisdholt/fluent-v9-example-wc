import { attr, observable } from "@microsoft/fast-element";
import { Button } from "../button/button";

/**
 * @internal
 */
 export class ToggleButton extends Button {
    /**
     * Tracks whether the "checked" property has been changed.
     * This is necessary to provide consistent behavior with
     * normal input checkboxes
     */
    protected dirtyChecked: boolean = false;

    /**
     * Provides the default checkedness of the input element
     * Passed down to proxy
     *
     * @public
     * @remarks
     * HTML Attribute: checked
     */
    @attr({ attribute: "checked", mode: "boolean"})
    public checkedAttribute: boolean = false;
    private checkedAttributeChanged(): void {
        this.defaultChecked = this.checkedAttribute;
    }

    @observable
    public defaultChecked: boolean;
    public defaultCheckedChanged(): void {
        if (!this.dirtyChecked) {
            // Setting this.checked will cause us to enter a dirty state,
            // but if we are clean when defaultChecked is changed, we want to stay
            // in a clean state, so reset this.dirtyChecked
            this.checked = this.defaultChecked;
            this.dirtyChecked = false;
        }
    }

    /**
     * The checked state of the control.
     *
     * @public
     */
    @observable
    public checked: boolean = false;
    public checkedChanged(prev: boolean | undefined, next: boolean): void {
        if (!this.dirtyChecked) {
            this.dirtyChecked = true;
        }

        this.currentChecked = this.checked;

        if (prev !== undefined) {
            this.$emit("change");
        }
    }

    /**
     * The current checkedness of the element. This property serves as a mechanism
     * to set the `checked` property through both property assignment and the
     * .setAttribute() method. This is useful for setting the field's checkedness
     * in UI libraries that bind data through the .setAttribute() API
     * and don't support IDL attribute binding.
     */
    @attr({ attribute: "current-checked", mode: "boolean"})
    public currentChecked: boolean = false;
    public currentCheckedChanged(prev: boolean | undefined, next: boolean) {
        this.checked = this.currentChecked;
    }

    constructor() {
        super();

        // Re-initialize dirtyChecked because initialization of other values
        // causes it to become true
        this.dirtyChecked = false;
    }

    /**
     * @internal
     */
         public keypressHandler = (e: KeyboardEvent): void => {
            if (!this.disabled && !this.disabledFocusable) {
                switch (e.key) {
                    case "Enter":
                    case " ":
                        this.checked = !this.checked;
                        break;
                }
            }
        };
    
        /**
         * @internal
         */
        public clickHandler = (e: MouseEvent): void => {
            if (!this.disabled && !this.disabledFocusable) {
                this.checked = !this.checked;
            }
        };
}