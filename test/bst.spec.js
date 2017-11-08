const BST = require('../index');
const { BinarySearchTree, root, left, right, student } = BST;

describe(`Binary Search Tree. Student: ${student}`, () => {
    let bst;
    let elements;
    let _root;

    describe('#insert', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
        });

        it('inserts key and value to the root element', () => {
            bst.insert(1, 'one');
            _root = bst[root];

            expect(_root.key).to.equal(1);
            expect(_root.value).to.equal('one');
        })

        it('should be chainable', () => {
            bst.insert(1, 'one');

            expect(bst.insert(1, 'one')).to.be.an.instanceof(BinarySearchTree);
        })

        it('inserts elements 2 -> 1 -> 3 by BST rules', () => {
            //---2----
            //1-----3-
            //--------
            elements = [2, 1, 3];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            });

            _root = bst[root];

            expect(_root.key).to.equal(2);
            expect(_root.value).to.equal('elem2');

            expect(_root[left].key).to.equal(1);
            expect(_root[left].value).to.equal('elem1');

            expect(_root[right].key).to.equal(3);
            expect(_root[right].value).to.equal('elem3');
        })

        it('inserts elements 7 -> 6 -> 34 -> 4 -> 65 -> 20 by BST rules', () => {
            //------7--------
            //--6--------34--
            //-4-------20--65-
            elements = [7, 6, 34, 4, 65, 20];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            });
            _root = bst[root];

            expect(_root.key).to.equal(7);
            expect(_root.value).to.equal('elem7');

            expect(_root[left].key).to.equal(6);
            expect(_root[left].value).to.equal('elem6');

            expect(_root[left][left].key).to.equal(4);
            expect(_root[left][left].value).to.equal('elem4');

            expect(_root[right].key).to.equal(34);
            expect(_root[right].value).to.equal('elem34');

            expect(_root[right][right].key).to.equal(65);
            expect(_root[right][right].value).to.equal('elem65');

            expect(_root[right][left].key).to.equal(20);
            expect(_root[right][left].value).to.equal('elem20');
        })
    });

    describe('#root', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
        });

        it('returns undefined || null if tree is empty', () => {
            expect(bst.root()).to.not.exist;
        })

        it('returns root value', () => {
            bst.insert(1, 'one');

            expect(bst.root()).to.to.equal('one');

        })

    });

    describe('#delete', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
            //------7--------
            //--6--------34--
            //-4-------20--65-
            elements = [7, 6, 34, 4, 65, 20];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            });
        });

        it('should be chainable', () => {
            expect(bst.delete(4)).to.be.an.instanceof(BinarySearchTree);
        })

        it('delete root', () => {
            bst.delete(7);
            _root = bst[root];
            //------20--------
            //---6----34-----
            //--4---------65--
            //-----------------

            expect(_root.key).to.equal(20);
            expect(_root.value).to.equal('elem20');

            expect(_root[left].key).to.equal(6);
            expect(_root[left].value).to.equal('elem6');

            expect(_root[right].key).to.equal(34);
            expect(_root[right].value).to.equal('elem34');

            expect(_root[left][left].key).to.equal(4);
            expect(_root[left][left].value).to.equal('elem4');

            expect(_root[right][right].key).to.equal(65);
            expect(_root[right][right].value).to.equal('elem65');

        })

        it('delete root->left', () => {
            bst.delete(6);
            _root = bst[root];
            //------7--------
            //--4--------34--
            //--------20--65-

            expect(_root.key).to.equal(7);
            expect(_root.value).to.equal('elem7');

            expect(_root[left].key).to.equal(4);
            expect(_root[left].value).to.equal('elem4');

            expect(_root[right].key).to.equal(34);
            expect(_root[right].value).to.equal('elem34');

            expect(_root[right][left].key).to.equal(20);
            expect(_root[right][left].value).to.equal('elem20');

            expect(_root[right][right].key).to.equal(65);
            expect(_root[right][right].value).to.equal('elem65');

        })

    });

    describe('#search', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
            //------7--------
            //--6--------34--
            //-4-------20--65-
            elements = [7, 6, 34, 4, 65, 20];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            })
        });

        it('returns root value', () => {
            expect(bst.search(7)).to.equal('elem7');
        })

        it('returns node value', () => {
            expect(bst.search(34)).to.equal('elem34');
        })

        it('returns undefined || null if node does not exist', () => {
            expect(bst.search(77)).to.not.exist;
        })

    });

    describe('#contains', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
            //------7--------
            //--6--------34--
            //-4-------20--65-
            elements = [7, 6, 34, 4, 65, 20];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            })
        });

        it('returns false for empty tree', () => {
            bst = new BinarySearchTree();

            expect(bst.contains(5)).to.be.false;
        })

        it('returns false if node does not exist', () => {
            expect(bst.contains(77)).to.be.false;
        })

        it('returns true if node exist', () => {
            expect(bst.contains('elem20')).to.be.true;
        })

    });

    describe('#traverse', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
            //------7--------
            //--6--------34--
            //-4-------20--65-
            elements = [7, 6, 34, 4, 65, 20];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            })
        });

        it('returns values from lowest to highest for true param', () => {
            expect(bst.traverse(true)).to.eql(["elem4", "elem6", "elem7", "elem20", "elem34", "elem65"]);
        });

        it('returns values from highest to lowest for false param', () => {
            expect(bst.traverse(false)).to.eql(["elem65", "elem34", "elem20", "elem7", "elem6", "elem4"]);
        })
    });

    describe('#verify', () => {
        beforeEach(() => {
            bst = new BinarySearchTree();
            //------7--------
            //--6--------34--
            //-4-------20--65-
            elements = [7, 6, 34, 4, 65, 20];

            elements.forEach((element) => {
                bst.insert(element, 'elem' + element);
            })
        });

        it('returns true for well-formated tree', () => {
            expect(bst.verify()).to.be.true;
        });

        it('returns false for not well-formated tree', () => {
            bst[root][right].key = 2;
            //------7--------
            //--6--------2--
            //-4-------20--65-
            expect(bst.verify()).to.be.false;
        })
    });


});
