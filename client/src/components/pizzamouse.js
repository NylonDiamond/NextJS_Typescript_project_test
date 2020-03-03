import React from "react";
import { StaggeredMotion, spring, presets } from "react-motion";
import range from "lodash.range";
import pizza from "../public/static/pizza.png";
import { Row, Col } from "react-bootstrap";
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 250, y: 300 };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("touchmove", this.handleTouchMove);
  }

  handleMouseMove = ({ pageX: x, pageY: y }) => {
    this.setState({ x, y });
  };

  handleTouchMove = ({ touches }) => {
    this.handleMouseMove(touches[0]);
  };

  getStyles = prevStyles => {
    // `prevStyles` is the interpolated value of the last tick
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? this.state
        : {
            x: spring(prevStyles[i - 1].x, presets.gentle),
            y: spring(prevStyles[i - 1].y, presets.gentle)
          };
    });
    return endValue;
  };

  render() {
    return (
      <>
        <Row>
          <StaggeredMotion
            defaultStyles={range(6).map(() => ({ x: 0, y: 0 }))}
            styles={this.getStyles}>
            {balls => (
              <div className="demo1">
                {balls.map(({ x, y }, i) => (
                  <div
                    key={i}
                    className={`demo1-ball ball-${i}`}
                    style={{
                      WebkitTransform: `translate3d(${x - 25}px, ${y -
                        25}px, 0)`,
                      transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      zIndex: balls.length - i
                    }}
                  />
                ))}
              </div>
            )}
          </StaggeredMotion>
          <style jsx>{`
            .demo1 {
              width: 50%;
              height: 50%;
              position: absolute;
              /* background: #eee; */
              display: hidden;
            }

            .demo1-ball {
              border-radius: 99px;
              /* background-color: white; */
              width: 50px;
              height: 50px;
              /* border: 3px solid white; */
              position: absolute;
              background-size: 50px;
            }

            .ball-0 {
              background-image: url(${pizza});
            }

            .ball-1 {
              background-image: url(${pizza});
            }

            .ball-2 {
              background-image: url(${pizza});
            }

            .ball-3 {
              background-image: url(${pizza});
            }

            .ball-4 {
              background-image: url(${pizza});
            }

            .ball-5 {
              background-image: url(${pizza});
            }
          `}</style>
        </Row>
      </>
    );
  }
}
