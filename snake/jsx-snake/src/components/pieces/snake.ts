interface Props {
  ShadowGameBoard: number[][];
  keyArrow: 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight';
}

export default class Snake {
  private snakeBody: number[][];
  private cacheLastPos?: number | string;

  constructor(shadowBoard: Props['ShadowGameBoard']) {
    this.snakeBody = [this.initSnake(shadowBoard)];
  }

  public get getSnakeBody() {
    return this.snakeBody;
  }

  addSegment(pos: number[]) {
    const lastSegment = this.snakeBody[this.snakeBody.length - 1];
    // option 1 if tail is at the end wait till one more movement and add?
    // option 2 cache the last know movement before tail was at edge and add it there
  }

  initSnake(shadowBoard: Props['ShadowGameBoard']) {
    return [shadowBoard.length / 2 - 1, shadowBoard[0].length / 2 - 1];
  }

  moveSnake(key: Props['keyArrow'], shadowBoard: Props['ShadowGameBoard']) {
    const snakeX = this.snakeBody[this.snakeBody.length - 1][0];
    const snakeY = this.snakeBody[this.snakeBody.length - 1][1];
    let shouldCache = false;

    switch (key) {
      case 'ArrowDown':
      case 'ArrowUp':
        shouldCache = this.checkXAxis();
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        shouldCache = this.checkYAxis();
        break;
      default:
        break;
    }
    //ArrowLeft, ArrowRight, ArrowUp, ArrowDown
    //
    // if(shadowBoard.length - 1 === snakeX ||  snakeX === 0 ) {
    //   // can be up or down
    //   this.cacheLastPos =
    // } else if(shadowBoard[0].length - 1 === snakeY || snakeY === 0) {
    //   // can be left or right
    //   this.cacheLastPos =
    // } else {
    //   this.cacheLastPos = undefined;
    // }
    // return this.snakeBody.map((segment: number[], index: number) {

    // });
  }

  // checks if the last segment will be from barrier of y axis
  checkYAxis(): boolean {
    if (this.snakeBody[this.snakeBody.length - 3][1]) {
    }

    return false;
  }

  // checks if the last segment will be from barrier of x axis
  checkXAxis(): boolean {
    return false;
  }
}
