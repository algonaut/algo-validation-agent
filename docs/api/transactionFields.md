---
title: transactionFields
---

# transactionFields

## Functions

<dl>
<dt><a href="#transactionSender">transactionSender(senderAddr)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test sender field for a valid Algorand address</p>
</dd>
<dt><a href="#transactionFee">transactionFee(txnFee)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid transaction fee</p>
</dd>
<dt><a href="#firstValidRound">firstValidRound(firstValid)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid first round</p>
</dd>
<dt><a href="#lastValidRound">lastValidRound(lastValid)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid first round</p>
</dd>
<dt><a href="#transactionNote">transactionNote(note)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid note field</p>
</dd>
<dt><a href="#transactionGenesisId">transactionGenesisId(genesisId)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid genesis id</p>
</dd>
<dt><a href="#transactionGenesisHash">transactionGenesisHash(genesisHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid genesis hash</p>
</dd>
<dt><a href="#transactionGroup">transactionGroup(genesisHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid group</p>
</dd>
<dt><a href="#transactionType">transactionType(type)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid transaction type</p>
</dd>
<dt><a href="#transactionReceiver">transactionReceiver(receiverAddr)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid transaction receiver account</p>
</dd>
<dt><a href="#transactionAmount">transactionAmount(txnAmount)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid algo amount to be sent</p>
</dd>
<dt><a href="#closeRemainderTo">closeRemainderTo(address)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for a valid algo amount to be sent</p>
</dd>
</dl>

<a name="transactionSender"></a>

## transactionSender(senderAddr) ⇒ <code>boolean</code>
Test sender field for a valid Algorand address

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| senderAddr | <code>string</code> | 

<a name="transactionFee"></a>

## transactionFee(txnFee) ⇒ <code>boolean</code>
Test for a valid transaction fee

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| txnFee | <code>number</code> | 

<a name="firstValidRound"></a>

## firstValidRound(firstValid) ⇒ <code>boolean</code>
Test for a valid first round

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| firstValid | <code>number</code> | 

<a name="lastValidRound"></a>

## lastValidRound(lastValid) ⇒ <code>boolean</code>
Test for a valid first round

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| lastValid | <code>number</code> | 

<a name="transactionNote"></a>

## transactionNote(note) ⇒ <code>boolean</code>
Test for a valid note field

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| note | <code>string</code> | 

<a name="transactionGenesisId"></a>

## transactionGenesisId(genesisId) ⇒ <code>boolean</code>
Test for a valid genesis id

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| genesisId | <code>string</code> | 

<a name="transactionGenesisHash"></a>

## transactionGenesisHash(genesisHash) ⇒ <code>boolean</code>
Test for a valid genesis hash

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| genesisHash | <code>string</code> | 

<a name="transactionGroup"></a>

## transactionGroup(genesisHash) ⇒ <code>boolean</code>
Test for a valid group

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| genesisHash | <code>string</code> | 

<a name="transactionType"></a>

## transactionType(type) ⇒ <code>boolean</code>
Test for a valid transaction type

**Kind**: global function  
**Category**: All Transactions  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="transactionReceiver"></a>

## transactionReceiver(receiverAddr) ⇒ <code>boolean</code>
Test for a valid transaction receiver account

**Kind**: global function  
**Category**: Payment Transactions  

| Param | Type |
| --- | --- |
| receiverAddr | <code>string</code> | 

<a name="transactionAmount"></a>

## transactionAmount(txnAmount) ⇒ <code>boolean</code>
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

