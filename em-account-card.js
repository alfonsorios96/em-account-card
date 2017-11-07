(function () {
    'use strict';

    /**
     * `em-account-card`
     *
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
    class EmAccountCard extends Polymer.Element {
        static get is() {
            return 'em-account-card';
        }

        static get properties() {
            return {
                account: {
                    type: Object,
                    value: {},
                    observer: '_customizeAccount'
                },
                isDebit: {
                    type: Boolean,
                    value: true
                }
            };
        }

        _customizeAccount(account) {
            console.log(account);
            this.set('isDebit', (account.type === 'debit') ? true : false);
        }
    }

    window.customElements.define(EmAccountCard.is, EmAccountCard);
})();