---
title: transactionFieldValidators
---

# transactionFieldValidators

## Functions

<dl>
<dt><a href="#from">from(senderAddr)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test sender field for a valid Algorand address</p>
</dd>
<dt><a href="#fee">fee(txnFee)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid transaction fee</p>
</dd>
<dt><a href="#firstRound">firstRound(firstValid)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid first round</p>
</dd>
<dt><a href="#lastRound">lastRound(lastValid)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid first round</p>
</dd>
<dt><a href="#note">note(note)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid note field</p>
</dd>
<dt><a href="#genesisID">genesisID(genesisId)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid genesis id</p>
</dd>
<dt><a href="#genesisHash">genesisHash(genesisHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid genesis hash</p>
</dd>
<dt><a href="#group">group(genesisHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid group</p>
</dd>
<dt><a href="#type">type(type)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid transaction type</p>
</dd>
<dt><a href="#to">to(receiverAddr)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid transaction receiver account</p>
</dd>
<dt><a href="#amount">amount(txnAmount)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid algo amount to be sent</p>
</dd>
<dt><a href="#closeRemainderTo">closeRemainderTo(address)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid algo amount to be sent</p>
</dd>
</dl>

<a name="from"></a>

## from(senderAddr) ⇒ <code>boolean</code>
Test sender field for a valid Algorand address

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| senderAddr | <code>string</code> | 

<a name="fee"></a>

## fee(txnFee) ⇒ <code>boolean</code>
Test for a valid transaction fee

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| txnFee | <code>number</code> | 

<a name="firstRound"></a>

## firstRound(firstValid) ⇒ <code>boolean</code>
Test for a valid first round

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| firstValid | <code>number</code> | 

<a name="lastRound"></a>

## lastRound(lastValid) ⇒ <code>boolean</code>
Test for a valid first round

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| lastValid | <code>number</code> | 

<a name="note"></a>

## note(note) ⇒ <code>boolean</code>
Test for a valid note field

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| note | <code>string</code> | 

<a name="genesisID"></a>

## genesisID(genesisId) ⇒ <code>boolean</code>
Test for a valid genesis id

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| genesisId | <code>string</code> | 

<a name="genesisHash"></a>

## genesisHash(genesisHash) ⇒ <code>boolean</code>
Test for a valid genesis hash

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| genesisHash | <code>string</code> | 

<a name="group"></a>

## group(genesisHash) ⇒ <code>boolean</code>
Test for a valid group

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| genesisHash | <code>string</code> | 

<a name="type"></a>

## type(type) ⇒ <code>boolean</code>
Test for a valid transaction type

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="to"></a>

## to(receiverAddr) ⇒ <code>boolean</code>
Test for a valid transaction receiver account

**Kind**: global function  
**Category**: Payment Transactions  

| Param | Type |
| --- | --- |
| receiverAddr | <code>string</code> | 

<a name="amount"></a>

## amount(txnAmount) ⇒ <code>boolean</code>
Test for a valid algo amount to be sent

**Kind**: global function  
**Category**: Payment Transactions  

| Param | Type |
| --- | --- |
| txnAmount | <code>number</code> | 

<a name="closeRemainderTo"></a>

## closeRemainderTo(address) ⇒ <code>boolean</code>
Test for a valid algo amount to be sent

**Kind**: global function  
**Category**: Payment Transactions  

| Param | Type |
| --- | --- |
| address | <code>number</code> | 

