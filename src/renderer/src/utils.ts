export const formatTimestamp = function (timestamp: bigint): string {
  const hrs = Math.floor(Number(timestamp / 3_600_000_000n)).toString().padStart(2, '0'); // prettier-ignore
  const min = Math.floor(Number(timestamp % 3_600_000_000n / 60_000_000n)).toString().padStart(2, '0'); // prettier-ignore
  const sec = Math.floor(Number(timestamp % 60_000_000n / 1_000_000n)).toString().padStart(2, '0'); // prettier-ignore
  const mc = Math.floor(Number(timestamp % 1_000_000n)).toString().padStart(6, '0'); // prettier-ignore

  return `${hrs}:${min}:${sec}.${mc}`;
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const formatTime = function (time: number): string {
  const day = Math.floor(time / (60 * 24));
  const hours = Math.floor(time / 60) % 24;
  const min = time % 60;

  return `${days[day % 7]} ${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
};

export const formatCurrency = function (game: number, amount: bigint): string {
  switch (game) {
    case 1: {
      // ETS2
      return amount.toLocaleString(undefined, {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
      });
    }
    case 2: {
      // ATS
      return amount.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      });
    }
    default: {
      return amount.toLocaleString();
    }
  }
};

export const formatMass = function (game: number, mass: number): string {
  switch (game) {
    case 2: {
      // ATS
      return mass.toLocaleString(undefined, {
        style: 'unit',
        unit: 'pound',
        maximumFractionDigits: 0
      });
    }
    default: {
      return mass.toLocaleString(undefined, {
        style: 'unit',
        unit: 'kilogram',
        maximumFractionDigits: 0
      });
    }
  }
};

export const formatDistance = function (game: number, distance: number): string {
  switch (game) {
    case 2: {
      // ATS
      return distance.toLocaleString(undefined, {
        style: 'unit',
        unit: 'mile',
        maximumFractionDigits: 0
      });
    }
    default: {
      return distance.toLocaleString(undefined, {
        style: 'unit',
        unit: 'kilometer',
        maximumFractionDigits: 0
      });
    }
  }
};

export const formatSpeed = function (game: number, speed: number): string {
  switch (game) {
    case 2: {
      // ATS
      const speedMph = speed * 2.23694;
      return speedMph.toLocaleString(undefined, {
        style: 'unit',
        unit: 'mile-per-hour',
        maximumFractionDigits: 0
      });
    }
    default: {
      const speedKph = speed * 3.6;
      return speedKph.toLocaleString(undefined, {
        style: 'unit',
        unit: 'kilometer-per-hour',
        maximumFractionDigits: 0
      });
    }
  }
};

export const formatFluid = function (game: number, amount: number): string {
  switch (game) {
    case 2: {
      // ATS
      const amountGallons = amount * 0.264172;
      return amountGallons.toLocaleString(undefined, {
        style: 'unit',
        unit: 'gallon',
        maximumFractionDigits: 0
      });
    }
    default: {
      return amount.toLocaleString(undefined, {
        style: 'unit',
        unit: 'liter',
        maximumFractionDigits: 0
      });
    }
  }
};
