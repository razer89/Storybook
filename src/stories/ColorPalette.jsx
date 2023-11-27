import React from 'react';
import PropTypes from 'prop-types';
import './ColorPalette.css';

const ColorPalette = ({ brandColors, accentColors, neutralColors, sentimentColors }) => {
  return (
    <div className="color-palette">
      <div className="color-category">
        <h2>Brand Colors</h2>
        <div className="color-swatches">
          {Object.entries(brandColors).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Primary - Accent Colors</h2>
        <div className="color-swatches">
          {Object.entries(accentColors.primary).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Secondary - Accent Colors</h2>
        <div className="color-swatches">
          {Object.entries(accentColors.secondary).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Neutrals - Light Grey</h2>
        <div className="color-swatches">
          {Object.entries(neutralColors.lightGrey).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Neutrals - Dark Grey</h2>
        <div className="color-swatches">
          {Object.entries(neutralColors.darkGrey).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Inform Colours</h2>
        <div className="color-swatches">
          {Object.entries(sentimentColors.inform).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Success Colours</h2>
        <div className="color-swatches">
          {Object.entries(sentimentColors.success).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Warning Colours</h2>
        <div className="color-swatches">
          {Object.entries(sentimentColors.warning).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h2>Error Colours</h2>
        <div className="color-swatches">
          {Object.entries(sentimentColors.error).map(([colorName, colorValue]) => (
            <div key={colorName} className="color-swatch-container">
              <div className="color-swatch" style={{ backgroundColor: colorValue }}></div>
              <div className="color-info">
                <div className="color-name">{colorName}</div>
                <div className="color-value">{colorValue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ColorPalette.propTypes = {
  brandColors: PropTypes.object.isRequired,
  accentColors: PropTypes.object.isRequired,
  neutralColors: PropTypes.object.isRequired,
  sentimentColors: PropTypes.object.isRequired,
};

export default ColorPalette;