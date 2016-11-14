// local imports
import calculateResponsiveState from 'actions/creators/calculateResponsiveState'
import CALCULATE_RESPONSIVE_STATE from 'actions/types/CALCULATE_RESPONSIVE_STATE'


describe('calculateResponsiveState', function () {
    it('returns action object with correct type when no arg passed', function () {
        const action = calculateResponsiveState()

        // action should be an object
        expect(action).to.be.an('object')
        // action should have correct type
        expect(action.type).to.equal(CALCULATE_RESPONSIVE_STATE)
    })


    it('returns action object with correct type when empty arg passed', function () {
        const action = calculateResponsiveState({})

        // action should be an object
        expect(action).to.be.an('object')
        // action should have correct type
        expect(action.type).to.equal(CALCULATE_RESPONSIVE_STATE)
    })


    it('returns action object with correct type when window-like arg passed', function () {
        const innerHeight = 200
        const matchMedia = function () {}

        const action = calculateResponsiveState({innerHeight, matchMedia})

        // action should be an object
        expect(action).to.be.an('object')
        // action should have correct type
        expect(action.type).to.equal(CALCULATE_RESPONSIVE_STATE)
    })


    it('puts the argument properties onto the returned action', function () {
        const innerHeight = Math.ceil(100 * Math.random())
        const matchMedia = function () {
            return Math.random() * Math.random()
        }

        const action = calculateResponsiveState({innerHeight, matchMedia})

        // action should have same properties as passed to creator
        expect(action.innerWidth).to.equal(document.documentElement.clientWidth)
        expect(action.innerHeight).to.equal(innerHeight)
        expect(action.matchMedia).to.equal(matchMedia)
    })


    it('properly defaults when no arg passed', function () {
        const action = calculateResponsiveState()

        expect(action.innerWidth).to.equal(document.documentElement.clientWidth)
        expect(action.innerHeight).to.be.undefined
        expect(action.matchMedia).to.be.undefined
    })


    it('properly defaults when empty arg passed', function () {
        const action = calculateResponsiveState({})

        expect(action.innerWidth).to.equal(document.documentElement.clientWidth)
        expect(action.innerHeight).to.be.undefined
        expect(action.matchMedia).to.be.undefined
    })
})
