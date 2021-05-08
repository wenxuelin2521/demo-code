class MatrixUtils {
    constructor() {}


    static leftTranslate(out, a, v) {
        var transMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        glMatrix.mat3.fromTranslation(transMat, v);
        return glMatrix.mat3.multiply(out, transMat, a);
    }
    static leftRotate(out, a, rad) {
        var rotateMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        glMatrix.mat3.fromRotation(rotateMat, rad);
        return glMatrix.mat3.multiply(out, rotateMat, a);
    }
    static leftScale(out, a, v) {
        var scaleMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        glMatrix.mat3.fromScaling(scaleMat, v);
        return glMatrix.mat3.multiply(out, scaleMat, a);
    }
    static leftMultiply(out, a, a1) {
        return glMatrix.mat3.multiply(out, a1, a);
    }

    static transform(m, actions) {
        var matrix = m ? [].concat(m) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
        for (var i = 0, len = actions.length; i < len; i++) {
            var action = actions[i];
            switch (action[0]) {
                case 't':
                    this.leftTranslate(matrix, matrix, [action[1], action[2]]);
                    break;
                case 's':
                    this.leftScale(matrix, matrix, [action[1], action[2]]);
                    break;
                case 'r':
                    this.leftRotate(matrix, matrix, action[1]);
                    break;
                case 'm':
                    this.leftMultiply(matrix, matrix, action[1]);
                    break;
                default:
                    break;
            }
        }
        return matrix;
    }

}