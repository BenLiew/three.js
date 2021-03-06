import { Curve } from '../core/Curve.js';
import { QuadraticBezier } from '../core/Interpolations.js';
import { Vector2 } from '../../math/Vector2.js';


function QuadraticBezierCurve( v0, v1, v2 ) {

	Curve.call( this );

	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;

}

QuadraticBezierCurve.prototype = Object.create( Curve.prototype );
QuadraticBezierCurve.prototype.constructor = QuadraticBezierCurve;

QuadraticBezierCurve.prototype.isQuadraticBezierCurve = true;

QuadraticBezierCurve.prototype.getPoint = function ( t, optionalTarget ) {

	var point = optionalTarget || new Vector2();

	var v0 = this.v0, v1 = this.v1, v2 = this.v2;

	point.set(
		QuadraticBezier( t, v0.x, v1.x, v2.x ),
		QuadraticBezier( t, v0.y, v1.y, v2.y )
	);

	return point;

};


export { QuadraticBezierCurve };
