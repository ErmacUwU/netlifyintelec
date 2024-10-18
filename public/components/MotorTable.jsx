"use client";
import React from 'react';

const motorData = [
  { hp: '1/6', monofasicos: { '115V': 4.4, '200V': 2.5, '230V': 2.2 }, trifasicos: {} },
  { hp: '1/4', monofasicos: { '115V': 5.8, '200V': 3.3, '230V': 2.9 }, trifasicos: {} },
  { hp: '1/3', monofasicos: { '115V': 7.2, '200V': 4.1, '230V': 3.6 }, trifasicos: {} },
  { hp: '1/2', monofasicos: { '115V': 9.8, '200V': 5.6, '230V': 4.9 }, trifasicos: { '200V': 2.3, '230V': 2, '460V': 1, '575V': 0.8 } },
  { hp: '3/4', monofasicos: { '115V': 13.8, '200V': 7.5, '230V': 6.9 }, trifasicos: { '200V': 3.2, '230V': 2.8, '460V': 1.4, '575V': 1.1 } },
  { hp: '1', monofasicos: { '115V': 16, '200V': 9.2, '230V': 8 }, trifasicos: { '200V': 4.1, '230V': 3.6, '460V': 1.8, '575V': 1.4 } },
  { hp: '1-1/2', monofasicos: { '115V': 20, '200V': 11.5, '230V': 10 }, trifasicos: { '200V': 6, '230V': 4.8, '460V': 2.4, '575V': 1.9 } },
  { hp: '2', monofasicos: { '115V': 24, '200V': 13.8, '230V': 12 }, trifasicos: { '200V': 7.5, '230V': 6, '460V': 3, '575V': 2.4 } },
  { hp: '3', monofasicos: { '115V': 34, '200V': 19.6, '230V': 17 }, trifasicos: { '200V': 11, '230V': 9.6, '460V': 4.8, '575V': 3.9 } },
  { hp: '5', monofasicos: { '115V': 56, '200V': 32.2, '230V': 28 }, trifasicos: { '200V': 17.5, '230V': 15.2, '460V': 7.6, '575V': 6.1 } },
  { hp: '7-1/2', monofasicos: {}, trifasicos: { '200V': 25.3, '230V': 22, '460V': 11, '575V': 9 } },
  { hp: '10', monofasicos: { '115V': 140, '200V': 57.5, '230V': 50 }, trifasicos: { '200V': 32.2, '230V': 28, '460V': 14, '575V': 11 } },
  { hp: '15', monofasicos: {}, trifasicos: { '200V': 48.3, '230V': 42, '460V': 21, '575V': 17 } },
  { hp: '20', monofasicos: {}, trifasicos: { '200V': 62.1, '230V': 54, '460V': 27, '575V': 22 } },
  { hp: '25', monofasicos: {}, trifasicos: { '200V': 78.2, '230V': 68, '460V': 34, '575V': 27 } },
  { hp: '30', monofasicos: {}, trifasicos: { '200V': 92, '230V': 80, '460V': 40, '575V': 32 } },
  { hp: '40', monofasicos: {}, trifasicos: { '200V': 119.6, '230V': 104, '460V': 52, '575V': 41 } },
  { hp: '50', monofasicos: {}, trifasicos: { '200V': 149.5, '230V': 130, '460V': 65, '575V': 52 } },
  { hp: '60', monofasicos: {}, trifasicos: { '200V': 177.1, '230V': 154, '460V': 77, '575V': 62 } },
  { hp: '75', monofasicos: {}, trifasicos: { '200V': 221, '230V': 192, '460V': 96, '575V': 77 } },
  { hp: '100', monofasicos: {}, trifasicos: { '200V': 285.2, '230V': 248, '460V': 124, '575V': 99 } },
  { hp: '125', monofasicos: {}, trifasicos: { '200V': 358.8, '230V': 312, '460V': 156, '575V': 125 } },
  { hp: '150', monofasicos: {}, trifasicos: { '200V': 414, '230V': 360, '460V': 180, '575V': 144 } },
  { hp: '200', monofasicos: {}, trifasicos: { '200V': 552, '230V': 480, '460V': 240, '575V': 192 } },
  { hp: '250', monofasicos: {}, trifasicos: { '200V': 685, '230V': 590, '460V': 295, '575V': 236 } },
  { hp: '300', monofasicos: {}, trifasicos: { '200V': 825, '230V': 720, '460V': 360, '575V': 288 } },
  { hp: '350', monofasicos: {}, trifasicos: { '200V': 960, '230V': 840, '460V': 420, '575V': 336 } },
  { hp: '400', monofasicos: {}, trifasicos: { '200V': 1100, '230V': 960, '460V': 480, '575V': 384 } },
  { hp: '450', monofasicos: {}, trifasicos: { '200V': 1238, '230V': 1080, '460V': 540, '575V': 432 } },
  { hp: '500', monofasicos: {}, trifasicos: { '200V': 1375, '230V': 1200, '460V': 600, '575V': 480 } },
  { hp: '600', monofasicos: {}, trifasicos: { '200V': 1650, '230V': 1440, '460V': 720, '575V': 576 } },
  { hp: '700', monofasicos: {}, trifasicos: { '200V': 1925, '230V': 1680, '460V': 840, '575V': 672 } },
  { hp: '800', monofasicos: {}, trifasicos: { '200V': 2200, '230V': 1920, '460V': 960, '575V': 768 } },
  { hp: '900', monofasicos: {}, trifasicos: { '200V': 2475, '230V': 2160, '460V': 1080, '575V': 864 } },
  { hp: '1000', monofasicos: {}, trifasicos: { '200V': 2750, '230V': 2400, '460V': 1200, '575V': 960 } },
];

const MotorTable = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Motor Rating (HP)</th>
          <th className="border border-gray-300 px-4 py-2" colSpan="3">Monofásicos</th>
          <th className="border border-gray-300 px-4 py-2" colSpan="4">Trifásicos</th>
        </tr>
        <tr>
          <th className="border border-gray-300 px-4 py-2"></th>
          <th className="border border-gray-300 px-4 py-2">115 Volt</th>
          <th className="border border-gray-300 px-4 py-2">200 Volt</th>
          <th className="border border-gray-300 px-4 py-2">230 Volt</th>
          <th className="border border-gray-300 px-4 py-2">200 Volt</th>
          <th className="border border-gray-300 px-4 py-2">230 Volt</th>
          <th className="border border-gray-300 px-4 py-2">460 Volt</th>
          <th className="border border-gray-300 px-4 py-2">575 Volt</th>
        </tr>
      </thead>
      <tbody>
        {motorData.map((motor, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{motor.hp}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.monofasicos['115V'] || '-'}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.monofasicos['200V'] || '-'}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.monofasicos['230V'] || '-'}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.trifasicos['200V'] || '-'}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.trifasicos['230V'] || '-'}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.trifasicos['460V'] || '-'}</td>
            <td className="border border-gray-300 px-4 py-2">{motor.trifasicos['575V'] || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MotorTable;
