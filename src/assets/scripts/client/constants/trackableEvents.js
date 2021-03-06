/**
 * Enum of categories used for ga event tracking
 *
 * @property TRACKABLE_EVENT
 */
export const TRACKABLE_EVENT = {
    /**
     * airport-specific events like:
     *
     * - initial-load
     * - airport switcher open
     * - airport switcher close
     * - airport switcher change
     *
     * @memberof TRACKABLE_EVENT
     * @property AIRPORTS
     */
    AIRPORTS: 'airports',

    /**
     * options events, encompasses all buttons
     * in option bar footer
     *
     * will report on/off (true/false) for each option
     *
     * timewarp should report current timewarp value
     *
     * @memberof TRACKABLE_EVENT
     * @property OPTIONS
     */
    OPTIONS: 'options',

    /**
     * toggle of settings dialog
     *
     * tracks change and next setting of a game option
     *
     * @memberof TRACKABLE_EVENT
     * @property SETTINGS
     */
    SETTINGS: 'settings',

    /**
     * reports on prev/next actions of tutorial
     *
     * @memberof TRACKABLE_EVENT
     * @property TUTORIAL
     */
    TUTORIAL: 'tutorial',

    /**
     * reports when the ui log renders an error message
     *
     * @memberof TRACKABLE_EVENT
     * @property UI_LOG
     */
    UI_LOG: 'ui-log'
};
