import 'package:flutter/material.dart';
import 'package:pikatorrent/utils/device.dart';

class TextSearch extends StatefulWidget {
  final Function(String) onChange;

  const TextSearch({super.key, required this.onChange});

  @override
  State<TextSearch> createState() => _TextSearchState();
}

class _TextSearchState extends State<TextSearch> {
  final _filterController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _filterController
        .addListener(() => widget.onChange(_filterController.text));
  }

  @override
  void dispose() {
    _filterController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ExpandableSearchFormField(
      controller: _filterController,
    );
  }
}

class ExpandableSearchFormField extends StatefulWidget {
  final TextEditingController controller;

  const ExpandableSearchFormField({super.key, required this.controller});

  @override
  State<ExpandableSearchFormField> createState() =>
      _ExpandableSearchFormFieldState();
}

class _ExpandableSearchFormFieldState extends State<ExpandableSearchFormField> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    var controller = widget.controller;

    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
      width: _isExpanded
          ? isMobileSize(context)
              ? 160
              : 240
          : 48,
      height: 48,
      child: Row(
        children: [
          Expanded(
            child: _isExpanded
                ? TextFormField(
                    controller: controller,
                    autofocus: true,
                    decoration: const InputDecoration(
                      labelText: 'Search...',
                      prefixIcon: Icon(Icons.search),
                      border: InputBorder.none,
                    ),
                  )
                : const SizedBox(),
          ),
          IconButton(
            icon: Icon(_isExpanded ? Icons.close : Icons.search),
            onPressed: () {
              setState(() {
                _isExpanded = !_isExpanded;
                if (!_isExpanded) {
                  controller.clear();
                }
              });
            },
          ),
        ],
      ),
    );
  }
}
