// @ts-ignore
import * as RobotoBoldTtf from '../assets/fonts/Roboto/Roboto-Bold.ttf';
// @ts-ignore
import * as RobotoBoldWoff from '../assets/fonts/Roboto/Roboto-Bold.woff';
// @ts-ignore
import * as RobotoRegularTtf from '../assets/fonts/Roboto/Roboto-Regular.ttf';
// @ts-ignore
import * as RobotoRegularWoff from '../assets/fonts/Roboto/Roboto-Regular.woff';
// @ts-ignore
import * as MuliRegularTtf from '../assets/fonts/Muli/Muli-Regular.ttf';
// @ts-ignore
import * as MuliRegularWoff from '../assets/fonts/Muli/Muli-Regular.woff';
// @ts-ignore
import * as MuliBoldTtf from '../assets/fonts/Muli/Muli-Bold.ttf';
// @ts-ignore
import * as MuliBoldWoff from '../assets/fonts/Muli/Muli-Bold.woff';

export const fonts = `
  @font-face{
    font-family: roboto-regular;
    src:
      url(${RobotoRegularWoff}) format("woff"),
      url(${RobotoRegularTtf}) format("truetype");
    font-style: normal;
    font-weight:100
  }
  @font-face{
    font-family: roboto-bold;
    src:
      url(${RobotoBoldWoff}) format("woff"),
      url(${RobotoBoldTtf}) format("truetype");
    font-style: normal;
    font-weight:200
  }
  @font-face{
    font-family: muli-regular;
    src:
      url(${MuliRegularWoff}) format("woff"),
      url(${MuliRegularTtf}) format("truetype");
    font-style: normal;
    font-weight:100
  }
  @font-face{
    font-family: muli-bold;
    src:
      url(${MuliBoldWoff}) format("woff"),
      url(${MuliBoldTtf}) format("truetype");
    font-style: normal;
    font-weight:200
  }
`;
