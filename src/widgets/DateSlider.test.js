import React from "react";
import DateSlider from "./DateSlider";
import {render} from "@testing-library/react";
import {dateToSol} from "../services/sols";

describe('DateSlider', () => {
    describe('render', () => {
        it('should return a container', () => {
            const {container} = render(
                <DateSlider earth_date={'2017-05-03'} onDateChanged={() => {}}/>
            );
            expect(container).toBeDefined();
        });

        it('should display the correct date', () => {
            const {getByTestId} = render(
                <DateSlider earth_date={'2017-05-03'} onDateChanged={() => {}}/>
            );

            const date = getByTestId('date-label');
            expect(date).toHaveTextContent('2017-05-03');
        });

        it('should have the correct slider position', () => {
            const {getByTestId} = render(
                <DateSlider earth_date={'2017-05-03'} onDateChanged={() => {}}/>
            );

            const input = getByTestId('date-slider');
            expect(input).toHaveValue(dateToSol('2017-05-03').toString());
        });
    });
});
