import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";

import Prueba from "@components/Prueba";

describe('Prueba', () => {
    afterEach(cleanup);

    it('should be rendered', () => {
        render(<Prueba />);
    })

    it('should be rendered with hello world', () => {
        render(<Prueba />);
        screen.getByText('hello world');
    })
})
