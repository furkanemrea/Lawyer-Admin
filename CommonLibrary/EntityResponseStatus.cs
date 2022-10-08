﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLibrary
{
    public enum EntityResponseStatus : byte
    {
        Empty = 0,
        Success = 1,
        Warning = 2,
        Error = 3
    }
}
