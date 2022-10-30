import { describe, it, expect } from 'vitest'
import { canReconfigure } from '../src/can-configure'

describe('canReconfigure', (): void => {

    it ('should throw an error if first parameter is missing', (): void => {
        expect((): boolean => canReconfigure()).toThrow()
    })

    it ('should throw an error if first parameter is not a string', (): void => {
        expect((): boolean => canReconfigure(2)).toThrow()
    })

    it ('should throw an error if second parameter is not a string', (): void => {
        expect((): boolean => canReconfigure('')).toThrow()
    })

    it ('should return a boolean', (): void => {
        expect(canReconfigure('', '')).toBeTypeOf('boolean')
    })

    it ('should return false if strings provided have different length', (): void => {
        expect(canReconfigure('abc', 'de')).toBe(false)
    })

    it ('should return false if strings provided have different length even with same unique characters', (): void => {
        expect(canReconfigure('aab', 'ab')).toBe(false)
    })

    it ('should return false if strings provided have different number of unique characters', (): void => {
        expect(canReconfigure('abc', 'ddd')).toBe(false)
    })

    it ('should return false if strings has different order of transformation', (): void => {
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    })
})