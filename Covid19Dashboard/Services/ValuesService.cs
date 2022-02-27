using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Covid19Dashboard.Dtos;
using Microsoft.VisualBasic.FileIO;

namespace Covid19Dashboard.Services
{
    public class ValuesService
    {

        public CovidFaelleDto GetCovidFaelle(string filePath)
        {
            CovidFaelleDto covidFaelleDto = new CovidFaelleDto()
            {
                Data = new List<double> { },
                Labels = new List<string> { }
            };
            covidFaelleDto.Data.Add(1);
            Console.WriteLine($"filePath: {filePath}");
            File.ReadAllLines(filePath)
                .Skip(1)
                .Select(x => x.Split(";"))
                .ToList()
                .ForEach(x =>
                {
                    covidFaelleDto.Labels.Add(x[0]);
                    covidFaelleDto.Data.Add(Double.Parse(x[1]));
                });
                
            return covidFaelleDto;
                
                
        }

        public CovidFaelleDto GetCovidFaelleAltersgruppe(string filePath)
        {
            CovidFaelleDto covidFaelleDto = new CovidFaelleDto()
            {
                Data = new List<double> { },
                Labels = new List<string> { }
            };
            File.ReadAllLines(filePath)
                //skip first line
                .Skip(1)
                //split each line
                .Select(x => x.Split(";"))
                //select only line from whole austria
                .Where(x => Int32.Parse(x[3]) == 10)
                .GroupBy(x => x[1])
                .ToList()
                .ForEach(x =>
                {
                    covidFaelleDto.Labels.Add(x.Key);
                    covidFaelleDto.Data.Add(x.Select(y => Int32.Parse(y[6])).Sum());
                });
            return covidFaelleDto;
        }

        public CovidFaelleDto GetCovidFaelleGender(string filePath)
        {
            CovidFaelleDto covidFaelleDto = new CovidFaelleDto()
            {
                Data = new List<double> { },
                Labels = new List<string> { }
            };
            File.ReadAllLines(filePath)
                .Skip(1)
                .Select(x => x.Split(";"))
                .GroupBy(x => x[5])
                .ToList()
                .ForEach(x =>
                {
                    covidFaelleDto.Labels.Add(x.Key);
                    covidFaelleDto.Data.Add(x.Select(y => Int32.Parse(y[4])).Sum());
                });
            return covidFaelleDto;
        }

        public CovidFaelleDto GetCovidFaelleBundeslaender(string filePath)
        {
            CovidFaelleDto covidFaelleDto = new CovidFaelleDto()
            {
                Data = new List<double> { },
                Labels = new List<string> { }
            };
            File.ReadAllLines(filePath)
                .Skip(1)
                .Select(x => x.Split(";"))
                .Where(x => x[1] != "Österreich")
                .GroupBy(x => x[1])
                .ToList()
                .ForEach(x =>
                {
                    covidFaelleDto.Labels.Add(x.Key);
                    covidFaelleDto.Data.Add(x.Select(y => Int32.Parse(y[4])).Sum());
                });
            return covidFaelleDto;
        }
    }

    

   
}
