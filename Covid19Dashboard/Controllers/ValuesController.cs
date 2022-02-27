using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Covid19Dashboard.Dtos;
using Covid19Dashboard.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Covid19Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class ValuesController : Controller
    {
        private ValuesService valuesService;

        public ValuesController(ValuesService valuesService)
        {
            this.valuesService = valuesService;
        }   

        [HttpGet]
        public CovidFaelleDto GetCovidFaelle()
        {
            return valuesService.GetCovidFaelle("csv/CovidFaelleDelta.csv");
        }

        [HttpGet]
        public CovidFaelleDto GetCovidFaelleAltersgruppe()
        {
            return valuesService.GetCovidFaelleAltersgruppe("csv/CovidFaelle_Altersgruppe.csv");
        }

        [HttpGet]
        public CovidFaelleDto GetCovidFaelleGender()
        {
            return valuesService.GetCovidFaelleGender("csv/CovidFaelle_Altersgruppe.csv");
        }

        [Authorize]
        [HttpGet]
        public CovidFaelleDto GetCovidFaelleBundeslaender()
        {
            return valuesService.GetCovidFaelleBundeslaender("csv/CovidFaelle_Timeline.csv");
        }
    }
}
