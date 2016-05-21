'use strict';

const expect            = require('chai').expect;
const isValidVariantBem = require('../lib');

describe('is-valid-variant-bem', function () {
    it('should validate "block__element_modifier"', function () {
        expect(isValidVariantBem('block__element_modifier'));
    });

    it('should validate "block__element_modifier_value"', function () {
        expect(isValidVariantBem('block__element_modifier_value'));
    });

    it('should validate "block__element"', function () {
        expect(isValidVariantBem('block__element'));
    });

    it('should validate "block_modifier"', function () {
        expect(isValidVariantBem('block_modifier'));
    });

    it('should validate "block_modifier_value"', function () {
        expect(isValidVariantBem('block_modifier_value'));
    });
});
