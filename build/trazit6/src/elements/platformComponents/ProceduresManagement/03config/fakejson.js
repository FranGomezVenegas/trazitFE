define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.procedures = _exports.appProcedureListFake = void 0;
  const appProcedureListFake = [
    {
      name: "proceduresList",
      label_en: "Procedures",
      label_es: "Procesos",
      type: "list",
      value: "",
      read_only: !1,
      items: [
        { keyName: "em_demo_a", keyValue_en: "Demo-A", keyValue_es: "Demo-A" },
        {
          keyName: "process/us",
          keyValue_en: "US Process",
          keyValue_es: "Proceso EEUU",
        },
        {
          keyName: "process/eu",
          keyValue_en: "EU Process",
          keyValue_es: "Proceso EU",
        },
      ],
    },
  ];
  _exports.appProcedureListFake = appProcedureListFake;
  const procedures = [
    {
      name: "emdemoa",
      definition: {
        users: [{ name: "yo" }, { name: "tu" }],
        roles: [{ name: "coordinator" }, { name: "admin" }],
      },
    },
    {
      name: "processus",
      definition: {
        users: [{ name: "nosotros" }, { name: "vosotros" }],
        roles: [{ name: "coordinator" }, { name: "admin" }],
      },
    },
  ];
  _exports.procedures = procedures;
});
