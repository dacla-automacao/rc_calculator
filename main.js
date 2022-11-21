//version control
const version = "v0.0.0";
document.getElementById('version').innerHTML = version;

//use html value as default for clear button
const contentInitialResult = document.getElementById('resultContent').innerHTML;

function calculateRC() {
  const pi = 3.141592653589;
  let frequency = 0;
  let resistence = 0;
  let capacitance = 0;

  frequency = getFrequency();
  
  if(frequency === "") {
    alert("Insira uma Frequência");
    return;
  }
  
  capacitance = getCapacitence();

  if(capacitance === "") {
    alert("Insira uma Capacitância");
    return;
  }

  resistence = 1/(2*pi*frequency*capacitance);

  const value = {
    freq: frequency,
    cap: capacitance,
    res: resistence
  };

  setResult(value);
}

function getFrequency() {
  let inFreq = document.getElementById('inFrequency').value;

  if(inFreq === '') return inFreq;

  const section = document.getElementById('scientificNotationOptionForFreq');
  const value = section.value;
  const option = section.options[section.selectedIndex].text;

  let convertedFreq = 0;
  switch (option) {
    case "Hz":
      convertedFreq = inFreq;
      break;
    case "kHz":
      convertedFreq = inFreq*1e+3;
      break;
    case "MHz":
      convertedFreq = inFreq*1e+6;
      break;
    case "GHz":
      convertedFreq = inFreq*1e+9;
      break;
    default:
      convertedFreq = '';
      break;
  }

  return convertedFreq;
}

function getCapacitence() {
  let inCap = document.getElementById('inCapacitance').value;

  const section = document.getElementById('scientificNotationOptionForCap');
  const value = section.value;
  const option = section.options[section.selectedIndex].text;

  let convertedCap = 0;
  switch (option) {
    case "F":
      convertedCap = inCap;
      break;
    case "mF":
      convertedCap = inCap*1e-3;
      break;
    case "uF":
      convertedCap = inCap*1e-6;
      break;
    case "nF":
      convertedCap = inCap*1e-9;
      break;
    default:
      convertedCap = '';
      break;
  }

  return convertedCap;
}

function setResult(value) {
  let result = `
  Frequência: ${value.freq} Hz <br>
  Capacitor: ${value.cap} F <br>
  Resistor: ${value.res} &#937`;

  document.getElementById('resultContent').innerHTML = result;
}

function clearAll() {
  document.getElementById('inCapacitance').value = "10";
  document.getElementById('inFrequency').value = "";
  document.getElementById('resultContent').innerHTML = contentInitialResult;
}