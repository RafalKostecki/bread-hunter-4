export const getSpecificStat = (stats, requiredStat) => {
    const statValue = stats.filter(stat => {
        if (stat.name.toLowerCase() === requiredStat.toLowerCase()) return stat;

        return null;
    });

    return statValue[0];
}