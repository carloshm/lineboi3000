import 'jest-canvas-mock';
import _ from 'lodash';
import Frame from 'canvas-to-buffer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { drawLines } from '../components/common/DrawingUtils/DrawingUtils';
import { printLinesViaFillCoords, generateLinesAtAngle } from './lineUtils';
import { getExtremePointsOfCoords } from '../plotting/plotUtils';
import { zShape } from '../testing/LineFixtures';

expect.extend({ toMatchImageSnapshot });

const { createCanvas } = require('canvas');

const testAngle = (angle) => {
    const { minX, maxX, minY, maxY } = getExtremePointsOfCoords(zShape);
    const square = [
        [minX, minY],
        [maxX, minY],
        [maxX, maxY],
        [minX, maxY],
        [minX, minY]
    ];

    const canvas = createCanvas(800, 600);
    const context = canvas.getContext('2d');

    context.strokeStyle = 'black';
    context.beginPath();
    context.fillStyle = 'white';
    context.rect(0, 0, 800, 600);
    context.fill();

    const lines = generateLinesAtAngle({
        minX,
        maxX,
        minY,
        maxY,
        distanceBetweenLines: 10,
        distanceBetweenPoints: 1,
        angle
    });

    drawLines(context, lines, 1, 'black');
    drawLines(context, [square], 2, 'red');

    context.fillStyle = 'black';
    context.font = 'bold 50px Arial';
    const angleString = `angle: ${angle}`;
    const textWidth = context.measureText(angleString);
    context.fillText(`angle: ${angle}`, 400 - textWidth.width / 2, 500);
    return canvas;
};

describe('GenerateLinesAtAngle', () => {
    it('should generate lines at angle 0', () => {
        const canvas = testAngle(0);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 37', () => {
        const canvas = testAngle(37);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 45', () => {
        const canvas = testAngle(45);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 67', () => {
        const canvas = testAngle(67);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 90', () => {
        const canvas = testAngle(90);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 110', () => {
        const canvas = testAngle(110);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 130', () => {
        const canvas = testAngle(130);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 160', () => {
        const canvas = testAngle(160);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });

    it('should generate lines at angle 180', () => {
        const canvas = testAngle(180);
        const frame = new Frame(canvas);
        const buffer = frame.toBuffer();
        expect(buffer).toMatchImageSnapshot();
    });
});