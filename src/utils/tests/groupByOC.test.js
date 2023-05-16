import { describe, expect, it } from "vitest";

import { groupByOC } from "../groupByOC";

import data from "../../data/documentos_pendientes.json";

/*
Realizar una funcion que agrupe los documentos pendientes de ubicar, por orden de compra y que solo agregue orden de compra a su fila y dentro de esa fila estarán todos los documentos asociados

Se espera:
✅ - Que la funcion sea una funcion
✅ - Que la funcion retorne un array
✅ - Que la funcion tome como parametro un array de objetos
- Que la funcion retorne un array de objetos con las propiedades:
    - CLIENTE_ID
    - RAZON_SOCIAL
    - DOCUMENTO_ID
    - STATUS
    - TIPO_CPTE
    - COMPROBANTE
    - FECHA_CPTE
    - CANT_AUX
    - QTY_TOTAL
    - QTY_PEND_UBICAR
    - QTY_UBICADA
    - QTY_EGRESADA
    - FECHA_ALTA_OC
    - ORDEN_DE_COMPRA
    - FECHA_ALTA_GTW
    - NRO_REMITO
    - NDI
    - OBSERVACIONES
    - VALIDA_QTY
- Que la funcion retorne un array de objetos con la propiedad orden de compra
- Que la funcion retorne un array de objetos con la propiedad orden de compra y que dentro de esa propiedad se encuentren todos los documentos asociados a esa orden de compra
- Que la funcion retorne un array de objetos con la propiedad orden de compra y que dentro de esa propiedad se encuentren todos los documentos asociados a esa orden de compra y que dentro de cada documento se encuentre la propiedad orden de compra
- Que si el objeto de la entrada de datos no tiene orden de compra, se agregue directamente al array de salida
*/

describe("groupByOC", () => {
    it("should return an array", () => {
        expect(Array.isArray(groupByOC([]))).toBe(true);
    });

    it("should throw if not array is provided as parameter", () => {
        expect(() => groupByOC()).toThrow();
    });

    it("should return an array of objects with properties", () => {
        const res = groupByOC(data);

        res.forEach((item) => {
            expect(item).not.toHaveProperty("CLIENTE_ID");
            expect(item).not.toHaveProperty("RAZON_SOCIAL");
            expect(item).not.toHaveProperty("DOCUMENTO_ID");
            expect(item).not.toHaveProperty("STATUS");
            expect(item).not.toHaveProperty("TIPO_CPTE");
            expect(item).not.toHaveProperty("COMPROBANTE");
            expect(item).not.toHaveProperty("FECHA_CPTE");
            expect(item).not.toHaveProperty("CANT_AUX");
            expect(item).not.toHaveProperty("QTY_TOTAL");
            expect(item).not.toHaveProperty("QTY_PEND_UBICAR");
            expect(item).not.toHaveProperty("QTY_UBICADA");
            expect(item).not.toHaveProperty("QTY_EGRESADA");
            expect(item).not.toHaveProperty("FECHA_ALTA_OC");
            expect(item).not.toHaveProperty("ORDEN_DE_COMPRA");
            expect(item).not.toHaveProperty("FECHA_ALTA_GTW");
            expect(item).not.toHaveProperty("NRO_REMITO");
            expect(item).not.toHaveProperty("NDI");
            expect(item).not.toHaveProperty("OBSERVACIONES");
            expect(item).not.toHaveProperty("VALIDA_QTY");
        });
    });


});
