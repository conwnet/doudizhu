/**
 * 扑克牌类
 * 用两个字符的字符串表示一张扑克牌
 * 第一个字符表示花色（1：黑桃 2：红桃 3：草花 4：方块）
 * 第二个字符表示牌面(3, 4, 5, 6, 7, 8, 9, 0, J, Q, K, A, 2, X, Y)
 * 10 和 鬼牌 比较特殊，分别用 0 (10) 和 X (大王), Y (小王) 代替
 */
module.exports = class Card extends String {
    constructor (str) {
        super(str);
    }

    static get values () {
        return ['3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A', '2', 'X', 'Y'];
    }

    compareTo(card) {
        console.log('what => ', this)
        let o1 = Card.values.indexOf(this[1]);
        let o2 = Card.values.indexOf(card[1]);
        if (o1 < 0 || o2 < 0) throw new Error('扑克牌无效');
        if (o1 == o2) return 0;
        if (o1 > o2) return 1;
        if (o1 < o2) return 0;
    }

}