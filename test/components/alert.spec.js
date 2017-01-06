import $ from 'jquery'
import Alert from '../../src/js/components/alert'
import Modal from '../../src/js/components/modal'

describe('Alert spec', () => {
  let instance, $fixture

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = $(fixture.load('alert.html')[0])

    instance = new Alert($fixture.find('[data-alert]'))
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('constructor', () => {
    it('should properly call super', sinon.test(function () {
      const stub = this.stub(Modal.prototype, 'constructor')

      let alert = new Alert('test')

      expect(stub.calledWith(instance.$element, {
        triggerOpen: '[data-trigger="open"]'
      }))
    }))
  })
})
