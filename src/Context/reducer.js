import { Carousel_change, Color_Change, Columns_Change, Font_Change } from "./reducer.type";

export const initialState = {
  color: false,
  fontSize: '1rem',
  columns: 5,
  carousel:false,
};

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case Color_Change: {
            return {
                ...state,
                color:payload
            }
        }
        case Font_Change: {
            return {
                ...state,
                fontSize:payload
            }
        }
        case Columns_Change: {
            return {
              ...state,
              columns: payload,
              carousel: false,
            };
        }
        case Carousel_change: {
            return {
              ...state,
              carousel: payload,
            };
        }
        default: return state;
    }
}