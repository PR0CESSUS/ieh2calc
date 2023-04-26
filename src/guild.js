
RequiredExp(long level) => GuildParameter.RequiredExp(level) * (1.0 - this.expRequirementReduction.Value());


public static double RequiredExp(long level) => Math.Floor(500.0 * (double) (level + 1L) + 50.0 * Math.Pow((double) level, 2.0) + 500.0 * Math.Pow((double) level / 5.0, 3.0) + 2000.0 * Math.Pow((double) level / 10.0, 6.0) + 25000.0 * Math.Pow((double) level / 20.0, 9.0) + 300000.0 * Math.Pow((double) level / 30.0, 12.0));