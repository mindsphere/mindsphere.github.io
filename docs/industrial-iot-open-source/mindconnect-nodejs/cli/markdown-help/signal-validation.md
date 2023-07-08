# mdsp signal-validation Command

Syntax:

```bash
mdsp signal-validation
```

Help:

```bash
mdsp signal-validation --help
```

Alternative form:

```bash
mc signal-validation
```

(The CLI was using `mc` as default command name in older versions)

## Description

perform signal validation @

## Usage

Parameter list:

```text
Usage: mdsp signal-validation|sv [options]

perform signal validation @

Options:
 -f, --file timeseries file (default: "timeseries-sample.json")
 -o, --output result-file (signal-validation-mode.json)
 -m, --mode [testdata|range|spike|jumps|noise|gaps|interpolate|bias] mode see @ Additional Documentation
 -n, --variablename [variablename] this variable will be taken from timeseries (default: "variable1")
 -l, --lowerlimit [lowerlimit] processing lower limit (for range)
 -u, --upperlimit [upperlimit] processing upper limit (for range)
 -w, --windowsize [windowsize] processing window size
 -r, --windowradius [windowradius] processing window radius (for noise)
 -t, --threshold [threshold] processing threshold
 -s, --step [step] processing step (for bias detection)
 -z, --size [size] generating test data size (default: "100")
 -y, --retry retry attempts before giving up (default: "3")
 -p, --passkey passkey
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp signal-validation` command:

```text

 Examples:

 mdsp signal-validation --mode range --lowerlimit -1 --upperlimit 1 performes the range validation for range [-1..1]
 mdsp signal-validation -mode jumps --windowsize 12 searches for jumps in the data
 mdsp signal-validation --mode interpolate --threshold 1000 interpolates a value for every gap > 1000ms

 Additional Documentation:

 https://developer.mindsphere.io/apis/analytics-signalvalidation/api-signalvalidation-basics.html

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
