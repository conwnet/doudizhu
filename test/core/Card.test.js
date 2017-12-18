import assert from 'assert';
import Card from '~/src/core/Card';

describe('扑克牌类测试', () => {
    let card = new Card();

    it('牌面大小测试', () => {
        assert.equal(new Card(), '1A');
    })

})