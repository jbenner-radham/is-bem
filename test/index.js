'use strict';

const expect = require('chai').expect;
const isBem  = require('../lib');

describe('is-valid-variant-bem', function () {
    it('should validate "block__element_modifier"', function () {
        expect(isBem('block__element_modifier')).to.equal(true);
    });

    it('should validate "block__element_modifier_value"', function () {
        expect(isBem('block__element_modifier_value')).to.equal(true);
    });

    it('should validate "block__element"', function () {
        expect(isBem('block__element')).to.equal(true);
    });

    it('should validate "block_modifier"', function () {
        expect(isBem('block_modifier')).to.equal(true);
    });

    it('should validate "block_modifier_value"', function () {
        expect(isBem('block_modifier_value')).to.equal(true);
    });

    it('should not validate "blockelementmodifier"', function () {
        expect(isBem('blockelementmodifier')).to.equal(false);
    })

    it('should not validate "block__element--modifier"', function () {
        expect(isBem('blockelementmodifier')).to.equal(false);
    })

    it('should not validate block__element_modifier_value_undefined', function () {
        expect(isBem('block__element_modifier_value_undefined')).to.equal(false);
    })
});
