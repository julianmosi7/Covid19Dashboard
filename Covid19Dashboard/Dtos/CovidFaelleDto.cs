using System;
using System.Collections.Generic;

namespace Covid19Dashboard.Dtos
{
    public class CovidFaelleDto
    {
        public List<double> Data { get; set; }
        public List<string> Labels { get; set; }
    }
}
